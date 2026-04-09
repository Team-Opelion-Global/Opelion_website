"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });

type Section = { heading: string; body: string };

export default function NewBlogPage() {
  const router = useRouter();
  const [adminToken, setAdminToken] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [intro, setIntro] = useState("");
  const [sections, setSections] = useState<Section[]>([
    { heading: "", body: "" },
    { heading: "", body: "" },
    { heading: "", body: "" },
  ]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const token = sessionStorage.getItem("blog_admin_token");
    if (!token) { router.push("/admin/blogs"); return; }
    setAdminToken(token);
    // Set today's date as default
    const today = new Date();
    setDate(today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
  }, [router]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  function updateSection(index: number, key: keyof Section, value: string) {
    setSections((prev) => prev.map((s, i) => i === index ? { ...s, [key]: value } : s));
  }

  function addSection() {
    setSections((prev) => [...prev, { heading: "", body: "" }]);
  }

  function removeSection(index: number) {
    setSections((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      let imageBase64 = "";
      let imageFileName = "";

      if (imageFile) {
        imageFileName = imageFile.name;
        const buffer = await imageFile.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        let binary = "";
        bytes.forEach((b) => (binary += String.fromCharCode(b)));
        imageBase64 = btoa(binary);
      }

      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": adminToken,
        },
        body: JSON.stringify({
          title, slug, date, category, desc, intro,
          sections: sections.filter((s) => s.heading.trim() && s.body.trim()),
          imageBase64,
          imageFileName,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to publish.");

      setStatus({ type: "success", message: `✅ Published! Live at /blog/${data.post.slug} (Netlify redeploys in ~1 min)` });
      // Reset form
      setTitle(""); setSlug(""); setDesc(""); setIntro("");
      setImageFile(null); setImagePreview("");
      setSections([{ heading: "", body: "" }, { heading: "", body: "" }, { heading: "", body: "" }]);
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  const categories = ["Market Trends", "Market Insights", "Quality Control", "Sustainability", "Trade", "Exports", "Sourcing"];

  return (
    <main className="min-h-screen bg-[#f5f3ef] py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#c79a2b] uppercase mb-1">Admin</p>
            <h1 className={`${playfair.className} text-3xl text-[#124b5a]`}>New Blog Post</h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/blog")}
              className="text-sm text-[#124b5a] hover:text-white bg-white hover:bg-[#124b5a] border border-[#e7d7b8] hover:border-[#124b5a] px-4 py-2 rounded-full transition font-medium"
            >
              Check Blogs
            </button>
            <button
              onClick={() => { sessionStorage.removeItem("blog_admin_token"); router.push("/admin/blogs"); }}
              className="text-sm text-gray-500 hover:text-[#124b5a] border border-[#e7d7b8] px-4 py-2 rounded-full transition"
            >
              Sign Out
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Basic Info */}
          <Card title="Basic Information">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Title *" value={title} onChange={setTitle} placeholder="Blog post title" />
              <Field label="Custom Slug (optional)" value={slug} onChange={setSlug} placeholder="auto-generated-from-title" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Date *" value={date} onChange={setDate} placeholder="April 9, 2026" />
              <div>
                <label className="block text-sm font-medium text-[#124b5a] mb-2">Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-[14px] border border-[#e7d7b8] bg-[#fffaf1] px-4 py-3 text-[#124b5a] outline-none focus:border-[#c79a2b] transition"
                >
                  <option value="">Select category</option>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <TextArea label="Card Description * (shown on blog listing)" value={desc} onChange={setDesc} placeholder="Short 1-2 line summary of the post" rows={2} />
          </Card>

          {/* Image Upload */}
          <Card title="Cover Image">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-[#e7d7b8] rounded-[18px] p-8 text-center cursor-pointer hover:border-[#c79a2b] transition bg-[#fffaf1]"
            >
              {imagePreview ? (
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                </div>
              ) : (
                <div>
                  <div className="w-12 h-12 bg-[#e7d7b8] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg width="20" height="20" fill="none" stroke="#c79a2b" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[#124b5a]">Click to upload image</p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP supported</p>
                </div>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            {imageFile && (
              <div className="flex items-center justify-between bg-[#fffaf1] border border-[#e7d7b8] rounded-xl px-4 py-2">
                <span className="text-sm text-[#124b5a]">{imageFile.name}</span>
                <button type="button" onClick={() => { setImageFile(null); setImagePreview(""); }} className="text-xs text-red-400 hover:text-red-600">Remove</button>
              </div>
            )}
          </Card>

          {/* Content */}
          <Card title="Article Content">
            <TextArea label="Intro Paragraph *" value={intro} onChange={setIntro} placeholder="Opening paragraph of the article..." rows={4} />
          </Card>

          {/* Sections */}
          <Card title="Sections">
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="rounded-[18px] border border-[#e7d7b8] bg-[#fffaf1] p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#124b5a]">Section {index + 1}</span>
                    {sections.length > 1 && (
                      <button type="button" onClick={() => removeSection(index)} className="text-xs text-red-400 hover:text-red-600">Remove</button>
                    )}
                  </div>
                  <Field label="Heading" value={section.heading} onChange={(v) => updateSection(index, "heading", v)} placeholder="Section heading" />
                  <TextArea label="Body" value={section.body} onChange={(v) => updateSection(index, "body", v)} placeholder="Section paragraph..." rows={4} />
                </div>
              ))}
              <button
                type="button"
                onClick={addSection}
                className="w-full border border-dashed border-[#c79a2b] text-[#c79a2b] py-3 rounded-[14px] text-sm font-medium hover:bg-[#c79a2b] hover:text-white transition"
              >
                + Add Section
              </button>
            </div>
          </Card>

          {/* Submit */}
          {status && (
            <div className={`rounded-xl px-5 py-4 text-sm ${status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-600 border border-red-200"}`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#124b5a] text-white py-4 rounded-full text-base font-semibold hover:bg-[#0f3f4b] transition disabled:opacity-50"
          >
            {submitting ? "Publishing..." : "Publish Blog Post"}
          </button>

        </form>
      </div>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[24px] border border-[#e7d7b8] shadow-sm p-6 space-y-4">
      <h2 className="text-lg font-semibold text-[#124b5a] border-b border-[#f0e8d8] pb-3">{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#124b5a] mb-2">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full rounded-[14px] border border-[#e7d7b8] bg-[#fffaf1] px-4 py-3 text-[#124b5a] outline-none focus:border-[#c79a2b] transition" />
    </label>
  );
}

function TextArea({ label, value, onChange, placeholder, rows }: { label: string; value: string; onChange: (v: string) => void; placeholder: string; rows: number }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#124b5a] mb-2">{label}</span>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows}
        className="w-full rounded-[14px] border border-[#e7d7b8] bg-[#fffaf1] px-4 py-3 text-[#124b5a] outline-none focus:border-[#c79a2b] transition resize-y" />
    </label>
  );
}
