import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Activity, Heart } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

const Blog = () => {
  const blogPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Activity className="absolute top-20 left-[10%] w-32 h-32 text-primary" strokeWidth={1} />
          <Heart className="absolute bottom-20 right-[15%] w-24 h-24 text-primary" strokeWidth={1} />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              News e Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Approfondimenti, consigli e novità dal mondo della fisioterapia per aiutarti a vivere una vita più sana e attiva.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 py-20">
        {blogPosts.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            Nessun articolo disponibile.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        )}
      </section>

      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Blog;
