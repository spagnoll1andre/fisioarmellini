import { Button } from "@/components/ui/button";
import { Tag, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "@/lib/blog";

interface BlogCardProps {
  slug: string;
  cover?: string;
  date: string;
  title: string;
  excerpt: string;
  tags?: string[];
}

const BlogCard = ({ slug, cover, date, title, excerpt, tags }: BlogCardProps) => {
  const displayTag = tags && tags.length > 0 ? tags[0] : "Fisioterapia";

  return (
    <Link to={`/blog/${slug}`}>
      <article className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden">
          {cover ? (
            <img
              src={cover}
              alt={title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-64 bg-secondary flex items-center justify-center">
              <span className="text-5xl select-none">🩺</span>
            </div>
          )}
          <div className="absolute bottom-4 left-4 bg-background px-4 py-2 rounded-lg shadow-md">
            <span className="text-sm font-bold text-foreground">{formatDate(date)}</span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              <span>{displayTag}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
            {excerpt}
          </p>

          <Button variant="outline" size="sm" className="rounded-full self-start">
            Leggi →
          </Button>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
