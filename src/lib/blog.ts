import matter from 'gray-matter';

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

// Load all markdown files eagerly at build time.
// Vite replaces this glob with the actual file contents.
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
  const { data, content } = matter(raw);

  // Derive slug from filename when not provided in frontmatter
  const filenameSlug = filepath.split('/').pop()?.replace(/\.md$/, '') ?? '';

  // gray-matter parses unquoted YAML dates as JS Date objects
  let date = '2025-01-01';
  if (data.date instanceof Date) {
    date = data.date.toISOString().slice(0, 10);
  } else if (typeof data.date === 'string') {
    date = data.date.slice(0, 10);
  }

  const meta: BlogPostMeta = {
    slug: typeof data.slug === 'string' ? data.slug : filenameSlug,
    title: typeof data.title === 'string' ? data.title : 'Untitled',
    date,
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
    cover: typeof data.cover === 'string' ? data.cover : undefined,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined,
  };

  return { meta, content: content.trim() };
}

// Parse and sort descending by date (newest first)
const allEntries: ParsedEntry[] = Object.entries(rawModules)
  .map(([path, raw]) => parseEntry(path, raw))
  .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

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

/** Format ISO date (YYYY-MM-DD) to Italian short format (DD/MM/YY) */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year.slice(2)}`;
}
