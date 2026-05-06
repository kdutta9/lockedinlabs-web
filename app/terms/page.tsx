import { getMarkdownContent } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — ZonedIn",
};

export default async function TermsPage() {
  const { html } = await getMarkdownContent("terms-of-use.md");

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div
        className="prose prose-invert prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
