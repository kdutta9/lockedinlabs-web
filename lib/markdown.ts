import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getMarkdownContent(filename: string) {
  const filepath = path.join(process.cwd(), "content", filename);
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  const html = await marked.parse(content);
  return { data, html };
}
