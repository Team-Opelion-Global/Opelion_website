"use client";

import { useState } from "react";

type Section = {
  heading: string;
  body: string;
};

const defaultSections: Section[] = [
  { heading: "", body: "" },
  { heading: "", body: "" },
  { heading: "", body: "" },
];

export default function BlogAdminForm() {
  const [adminToken, setAdminToken] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("/blog_images/blog1.webp");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [intro, setIntro] = useState("");
  const [sections, setSections] = useState<Section[]>(defaultSections);
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function updateSection(index: number, key: keyof Section, value: string) {
    setSections((current) =>
      current.map((section, sectionIndex) =>
        sectionIndex === index ? { ...section, [key]: value } : section
      )
    );
  }

  function addSection() {
    setSections((current) => [...current, { heading: "", body: "" }]);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": adminToken,
        },
        body: JSON.stringify({
          title,
          slug,
          img: image,
          date,
          category,
          desc: description,
          intro,
          sections,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Failed to create blog post.");
      }

      setStatus(`Published: /blog/${payload.post.slug}`);
      setTitle("");
      setSlug("");
      setImage("/blog_images/blog1.webp");
      setDate("");
      setCategory("");
      setDescription("");
      setIntro("");
      setSections(defaultSections);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-white rounded-[24px] border border-[#d9c7a1] shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-serif text-[#124b5a] mb-6">
        Create Blog Post
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Admin Token"
            value={adminToken}
            onChange={setAdminToken}
            placeholder="Enter admin token"
          />
          <Field
            label="Date"
            value={date}
            onChange={setDate}
            placeholder="March 21, 2026"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Title"
            value={title}
            onChange={setTitle}
            placeholder="Blog title"
          />
          <Field
            label="Slug"
            value={slug}
            onChange={setSlug}
            placeholder="optional-custom-slug"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Category"
            value={category}
            onChange={setCategory}
            placeholder="Market Trends"
          />
          <Field
            label="Image Path"
            value={image}
            onChange={setImage}
            placeholder="/images/blogs/blog1.webp"
          />
        </div>

        <TextAreaField
          label="Card Description"
          value={description}
          onChange={setDescription}
          placeholder="Short listing summary"
          rows={3}
        />

        <TextAreaField
          label="Intro"
          value={intro}
          onChange={setIntro}
          placeholder="Opening paragraph for the article page"
          rows={4}
        />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif text-[#124b5a]">Sections</h3>
            <button
              type="button"
              onClick={addSection}
              className="border border-[#c79a2b] text-[#124b5a] px-4 py-2 rounded-full hover:bg-[#c79a2b] hover:text-white transition"
            >
              Add Section
            </button>
          </div>

          {sections.map((section, index) => (
            <div
              key={`${index}-${section.heading}`}
              className="rounded-[18px] border border-[#e7d7b8] bg-[#fffaf1] p-4 space-y-3"
            >
              <Field
                label={`Section ${index + 1} Heading`}
                value={section.heading}
                onChange={(value) => updateSection(index, "heading", value)}
                placeholder="Section heading"
              />
              <TextAreaField
                label={`Section ${index + 1} Body`}
                value={section.body}
                onChange={(value) => updateSection(index, "body", value)}
                placeholder="Section paragraph"
                rows={4}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="bg-[#124b5a] text-white px-6 py-3 rounded-full hover:bg-[#0f3f4b] transition disabled:opacity-60"
          >
            {submitting ? "Publishing..." : "Publish Blog"}
          </button>
          {status ? <p className="text-sm text-[#124b5a]">{status}</p> : null}
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#124b5a] mb-2">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[16px] border border-[#e7d7b8] bg-[#fffaf1] px-4 py-3 outline-none focus:border-[#c79a2b]"
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  rows,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  rows: number;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#124b5a] mb-2">{label}</span>
      <textarea
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[16px] border border-[#e7d7b8] bg-[#fffaf1] px-4 py-3 outline-none focus:border-[#c79a2b] resize-y"
      />
    </label>
  );
}
