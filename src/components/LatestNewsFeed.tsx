import { Stethoscope, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getLatestPosts, formatDate } from "@/lib/blog";

const LatestNewsFeed = () => {
  const blogPosts = getLatestPosts(3);

  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            RIMANI AGGIORNATO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Novità e blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Image / Placeholder with Date Overlay */}
              <div className="relative">
                {post.cover ? (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-secondary flex items-center justify-center">
                    <span className="text-5xl select-none">🩺</span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-background px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-foreground font-semibold text-sm">
                    {formatDate(post.date)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-primary" />
                    <span>{post.tags?.[0] ?? "Fisioterapia"}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" className="w-full">
                    Leggi l&apos;articolo
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsFeed;
