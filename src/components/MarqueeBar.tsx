import { Instagram, Phone } from "lucide-react";

const MarqueeBar = () => {
  // 1. Aggiornato l'array per includere gli 'href' e le proprietà dei link
  const content = [
    {
      icon: Instagram,
      text: "Instagram: dottoressa.armellini",
      href: "https://www.instagram.com/dottoressa.armellini",
      target: "_blank" // Apre in una nuova scheda
    },
    {
      icon: Phone,
      text: "Contattami: +39 3791009600",
      href: "tel:+393791009600", // Link per avviare la chiamata
      target: "_self" // Apre nella stessa scheda
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-4">
      <div className="animate-marquee whitespace-nowrap flex gap-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center">
            {content.map((item, index) => (
              // 2. Sostituito il 'div' con un tag 'a' (link)
              <a
                key={index}
                href={item.href}
                target={item.target}
                rel="noopener noreferrer" // Buona pratica per link 'target="_blank"'
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
              >
                {/* 3. Icone rimpicciolite per un look migliore */}
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBar;