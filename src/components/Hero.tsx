import heroImage from "@/assets/hero_section_home_sfondotrasparente.png";
import { Instagram, Phone } from "lucide-react";

// Modificato per includere link cliccabili
const MarqueeBar = () => {
  const content = [
    {
      icon: Instagram,
      text: "Instagram: dottoressa.armellini",
      href: "https://www.instagram.com/dottoressa.armellini",
      target: "_blank"
    },
    {
      icon: Phone,
      text: "Contattami: +39 3791009600",
      href: "tel:+393791009600",
      target: "_self"
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden h-[calc(1em+4px)] md:py-6">
      <div className="animate-marquee whitespace-nowrap flex gap-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center">
            {content.map((item, index) => (
              // Sostituito div con 'a' (link)
              <a
                key={index}
                href={item.href}
                target={item.target}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
              >
                <item.icon className="w-6 h-6" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12 pt-10">
          <div className="inline-block bg-mint-light text-foreground px-6 py-2 rounded-full text-sm font-medium mb-6">
            Un approccio fisioterapico mirato, umano e scientifico.
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-8">
            Dott.ssa Francesca Armellini
          </h1>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-mint-accent rounded-full opacity-50" />
        <div className="absolute bottom-20 right-10 w-16 h-16">
          <svg viewBox="0 0 100 100" className="text-mint-accent opacity-50">
            <path
              d="M 10 50 Q 30 30 50 50 T 90 50"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>



        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Studio fisioterapico - Dott.ssa Francesca Armellini"
            className="w-full max-w-6xl rounded-3xl object-cover"
          />
        </div>
      </div>



      {/* MarqueeBar attached to bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <MarqueeBar />
      </div>
    </section>
  );
};

export default Hero;