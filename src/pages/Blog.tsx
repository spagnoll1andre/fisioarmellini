import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import { getAllPosts } from "@/lib/blog";
import doctorHero from "@/assets/hero_section_novita.png";

const Blog = () => {
  const blogPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary pt-1 pb-1 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Colonna Sinistra (Testo) */}
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full">
                <span className="text-sm font-medium text-primary">• BLOG E NEWS</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground leading-tight">
                News e Blog
              </h1>

              <p className="text-lg text-foreground/80 max-w-lg">
                Approfondimenti, consigli e novità dal mondo della fisioterapia per aiutarti a vivere una vita più sana e attiva.
              </p>
            </div>

            {/* Colonna Destra (Immagine) */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={doctorHero}
                  alt="Dott.ssa Armellini - Blog"
                  className="w-10/12 mx-auto h-10/12 rounded-3xl"
                />
              </div>
            </div>
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
