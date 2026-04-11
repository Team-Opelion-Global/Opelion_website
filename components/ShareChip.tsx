"use client";

interface ShareChipProps {
  label: string;
  title?: string;
}

export default function ShareChip({ label, title = "" }: ShareChipProps) {
  const handleShare = (platform: string) => {
    if (typeof window === "undefined") return;

    const shareUrl = window.location.href;
    const finalTitle = title || document.querySelector("h1")?.textContent || document.title || "Check out this article";
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(finalTitle);

    let shareLink = "";

    switch (platform.toLowerCase()) {
      case "whatsapp":
        shareLink = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;

      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;

      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;

      default:
        return;
    }

    window.open(shareLink, "_blank");
  };

  return (
    <button
      onClick={() => handleShare(label)}
      className="rounded-md border border-[#e7d7b8] bg-white px-4 py-2 text-sm text-[#124b5a] transition hover:bg-[#124b5a] hover:text-white hover:border-[#124b5a] cursor-pointer font-medium"
    >
      {label}
    </button>
  );
}
