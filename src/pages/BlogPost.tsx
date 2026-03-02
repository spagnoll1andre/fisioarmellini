import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tag, Calendar, ArrowLeft } from "lucide-react";
import { getPostBySlug, formatDate } from "@/lib/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-32 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Articolo non trovato
          </h1>
          <p className="text-muted-foreground mb-8">
            L&apos;articolo che stai cercando non esiste o è stato rimosso.
          </p>
          <Link to="/blog">
            <Button className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna al Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Tutti gli articoli
        </Link>

        {/* Cover image */}
        {post.cover && (
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{formatDate(post.date)}</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-primary" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Markdown content */}
        <div className="blog-prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Back to blog */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/blog">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna al Blog
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
