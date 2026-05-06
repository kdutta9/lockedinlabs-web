import { getMarkdownContent } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ZonedIn",
};

export default async function PrivacyPage() {
  const { html } = await getMarkdownContent("privacy-policy.md");

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div
        className="prose prose-invert prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
