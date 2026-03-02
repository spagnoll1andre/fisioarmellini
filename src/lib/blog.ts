/**
 * Blog engine — single source of truth.
 * Zero Node.js dependencies: uses a browser-safe inline frontmatter parser
 * instead of gray-matter (which requires Buffer/Node polyfills).
 */

export interface BlogPostMeta {
  slug: string;
  title: string;
  /** ISO date string YYYY-MM-DD */
  date: string;
  excerpt: string;
  cover?: string;
  tags?: string[];
}

export interface BlogPost extends BlogPostMeta {
  /** Raw markdown content (without frontmatter) */
  content: string;
}

// ---------------------------------------------------------------------------
// Minimal browser-safe frontmatter parser
// Handles:
//   key: unquoted value
//   key: "quoted value"  /  key: 'quoted value'
//   key:                 ← followed by YAML block list
//     - item1
//     - item2
// ---------------------------------------------------------------------------
type FmData = Record<string, string | string[]>;

function parseFrontmatter(raw: string): { data: FmData; content: string } {
  if (!raw.startsWith('---')) {
    return { data: {}, content: raw.trim() };
  }

  // Find the closing --- (must be on its own line)
  const closeIdx = raw.indexOf('\n---', 3);
  if (closeIdx === -1) {
    return { data: {}, content: raw.trim() };
  }

  const fmBlock = raw.slice(3, closeIdx).trim();
  const content = raw.slice(closeIdx + 4).trim(); // skip '\n---'

  const data: FmData = {};
  const lines = fmBlock.split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip blank lines and YAML comments
    if (!line.trim() || line.trimStart().startsWith('#')) {
      i++;
      continue;
    }

    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) {
      i++;
      continue;
    }

    const key = line.slice(0, colonIdx).trim();
    const rawVal = line.slice(colonIdx + 1).trim();

    if (rawVal === '') {
      // Look ahead for YAML block list items (  - value)
      const items: string[] = [];
      i++;
      while (i < lines.length && /^\s+-\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\s+-\s*/, '').trim());
        i++;
      }
      if (items.length > 0) data[key] = items;
      continue;
    }

    // Strip surrounding single or double quotes
    if (
      (rawVal.startsWith('"') && rawVal.endsWith('"')) ||
      (rawVal.startsWith("'") && rawVal.endsWith("'"))
    ) {
      data[key] = rawVal.slice(1, -1);
    } else {
      data[key] = rawVal;
    }

    i++;
  }

  return { data, content };
}

// ---------------------------------------------------------------------------
// Load all .md files eagerly at build time via Vite glob
// ---------------------------------------------------------------------------
const rawModules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

interface ParsedEntry {
  meta: BlogPostMeta;
  content: string;
}

function parseEntry(filepath: string, raw: string): ParsedEntry {
  const { data, content } = parseFrontmatter(raw);

  const filenameSlug = filepath.split('/').pop()?.replace(/\.md$/, '') ?? '';

  const rawDate = data['date'];
  const date =
    typeof rawDate === 'string' && rawDate.length >= 10
      ? rawDate.slice(0, 10)
      : '2025-01-01';

  const rawTags = data['tags'];
  const tags = Array.isArray(rawTags) ? rawTags : undefined;

  const meta: BlogPostMeta = {
    slug: typeof data['slug'] === 'string' ? data['slug'] : filenameSlug,
    title: typeof data['title'] === 'string' ? data['title'] : 'Untitled',
    date,
    excerpt: typeof data['excerpt'] === 'string' ? data['excerpt'] : '',
    cover: typeof data['cover'] === 'string' ? data['cover'] : undefined,
    tags,
  };

  return { meta, content };
}

// Parse all posts and sort newest-first
const allEntries: ParsedEntry[] = Object.entries(rawModules)
  .map(([path, raw]) => parseEntry(path, raw))
  .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** All posts sorted newest-first */
export function getAllPosts(): BlogPostMeta[] {
  return allEntries.map((e) => e.meta);
}

/** Latest n posts sorted newest-first */
export function getLatestPosts(n: number): BlogPostMeta[] {
  return allEntries.slice(0, n).map((e) => e.meta);
}

/** Single post by slug, or null if not found */
export function getPostBySlug(slug: string): BlogPost | null {
  const entry = allEntries.find((e) => e.meta.slug === slug);
  if (!entry) return null;
  return { ...entry.meta, content: entry.content };
}

/** Format ISO date (YYYY-MM-DD) → Italian short format (DD/MM/YY) */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year.slice(2)}`;
}
