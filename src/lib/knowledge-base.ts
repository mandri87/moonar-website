import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const PROCESSED_ROOT = path.join(
  process.cwd(),
  "content/knowledge-base/processed",
);

export type CategorySlug =
  | "tyre-design"
  | "simulation"
  | "tyre-vehicle-dynamics"
  | "testing"
  | "process"
  | "ai-data-infrastructure"
  | "publications"
  | "case-studies"
  | "academy"
  | "glossary";

// A logical site category can be backed by more than one physical folder
// in the knowledge-base repo. "testing" in particular is subdivided
// physically (indoor/performance, indoor/regulatory-safety-homologation,
// outdoor) but presented as one category on the site.
const CATEGORY_DIRS: Record<CategorySlug, string[]> = {
  "tyre-design": ["tyre-design"],
  simulation: ["simulation"],
  "tyre-vehicle-dynamics": ["tyre-vehicle-dynamics"],
  testing: [
    "testing/indoor/performance",
    "testing/indoor/regulatory-safety-homologation",
    "testing/outdoor",
  ],
  process: ["process"],
  "ai-data-infrastructure": ["ai-data-infrastructure"],
  publications: ["publications"],
  "case-studies": ["case-studies"],
  academy: ["academy"],
  glossary: ["glossary"],
};

export type ArticleSummary = {
  slug: string;
  title: string;
};

type RegistryEntry = {
  category: CategorySlug;
  slug: string;
};

function listMarkdownFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath).filter((file) => file.endsWith(".md"));
}

function buildRegistry(): Map<string, RegistryEntry> {
  const registry = new Map<string, RegistryEntry>();

  for (const [category, dirs] of Object.entries(CATEGORY_DIRS) as [
    CategorySlug,
    string[],
  ][]) {
    for (const dir of dirs) {
      const dirPath = path.join(PROCESSED_ROOT, dir);
      for (const file of listMarkdownFiles(dirPath)) {
        const slug = file.replace(/\.md$/, "");
        registry.set(`${dir}/${file}`, { category, slug });
      }
    }
  }

  return registry;
}

let registryCache: Map<string, RegistryEntry> | null = null;

function getRegistry(): Map<string, RegistryEntry> {
  if (!registryCache) registryCache = buildRegistry();
  return registryCache;
}

function extractTitle(markdown: string): { title: string; body: string } {
  const lines = markdown.split("\n");
  const match = lines[0]?.trim().match(/^#\s+(.*)$/);
  if (match) {
    return { title: match[1].trim(), body: lines.slice(1).join("\n") };
  }
  return { title: "", body: markdown };
}

// Removes the trailing internal citation paragraph, e.g.
// "*Source: [raw/transcripts/x.txt](../../raw/transcripts/x.txt)*"
// This references internal raw material and should never be shown publicly.
function stripSourceLine(markdown: string): string {
  return markdown.replace(/\n*\*Source:[^\n]*\*\s*$/i, "").trimEnd();
}

// Rewrites relative links to other knowledge-base documents (e.g.
// "../glossary/tread.md" or "rib.md") into site routes
// (e.g. "/references/glossary/tread"). Links that don't resolve to a
// known article (such as references into raw/) are left untouched.
function rewriteLinks(markdown: string, currentDir: string): string {
  const registry = getRegistry();

  return markdown.replace(/\]\(([^)]+)\)/g, (full, target: string) => {
    if (/^https?:\/\//i.test(target) || target.startsWith("#")) return full;
    if (!target.endsWith(".md") && !target.includes(".md#")) return full;

    const [rawPath, anchor] = target.split("#");
    const resolved = path.posix.normalize(path.posix.join(currentDir, rawPath));
    const entry = registry.get(resolved);
    if (!entry) return full;

    const href = `/references/${entry.category}/${entry.slug}${anchor ? `#${anchor}` : ""}`;
    return `](${href})`;
  });
}

export function getCategoryArticles(category: CategorySlug): ArticleSummary[] {
  const dirs = CATEGORY_DIRS[category];
  const articles: ArticleSummary[] = [];

  for (const dir of dirs) {
    const dirPath = path.join(PROCESSED_ROOT, dir);
    for (const file of listMarkdownFiles(dirPath)) {
      const raw = fs.readFileSync(path.join(dirPath, file), "utf-8");
      const { title } = extractTitle(raw);
      articles.push({ slug: file.replace(/\.md$/, ""), title: title || file });
    }
  }

  return articles.sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllArticleParams(): { slug: CategorySlug; article: string }[] {
  const params: { slug: CategorySlug; article: string }[] = [];
  for (const category of Object.keys(CATEGORY_DIRS) as CategorySlug[]) {
    for (const article of getCategoryArticles(category)) {
      params.push({ slug: category, article: article.slug });
    }
  }
  return params;
}

export async function getArticle(
  category: CategorySlug,
  slug: string,
): Promise<{ title: string; html: string } | null> {
  const dirs = CATEGORY_DIRS[category];

  for (const dir of dirs) {
    const filePath = path.join(PROCESSED_ROOT, dir, `${slug}.md`);
    if (!fs.existsSync(filePath)) continue;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { title, body } = extractTitle(raw);
    const stripped = stripSourceLine(body);
    const rewritten = rewriteLinks(stripped, dir);

    const processed = await remark().use(remarkGfm).use(remarkHtml).process(rewritten);

    return { title, html: processed.toString() };
  }

  return null;
}
