import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import success1 from "@/assets/success-1.jpg";
import success2 from "@/assets/success-2.jpg";
import success3 from "@/assets/success-3.jpg";

const successCases = [
  {
    id: 1,
    image: success1,
    title: "Trattamento manuale per cervicalgia acuta con irradiazione",
    description: "Un intervento mirato di terapia manuale e mobilizzazioni per risolvere una cervicalgia acuta"
  },
  {
    id: 2,
    image: success2,
    title: "Riabilitazione per lombalgia da sovraccarico funzionale",
    description: "Un percorso strutturato di rieducazione motoria e rinforzo per risolvere una lombalgia persistente"
  },
  {
    id: 3,
    image: success3,
    title: "Riduzione fibrosi ed edema dopo liposuzione addominale",
    description: "Un percorso dermatofunzionale completo per migliorare edema, fibrosi e aderenze post liposuzione"
  },
  {
    id: 4,
    image: success1,
    title: "Terapia fisica per tendinite rotulea da sovraccarico sportivo",
    description: "Un percorso mirato con tecarterapia e ultrasuoni per ridurre l'infiammazione del tendine rotuleo"
  },
  {
    id: 5,
    image: success2,
    title: "Riduzione del dolore da borsite alla spalla",
    description: "Un intervento mirato per alleviare dolore e migliorare la stabilità attraverso taping ed esercizi"
  },
  {
    id: 6,
    image: success3,
    title: "Riabilitazione completa dopo ricostruzione LCA",
    description: "Un percorso post-operatorio strutturato per recuperare mobilità, forza e stabilità"
  }
];

const SuccessCarousel = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-12">
          I miei casi di successo più recenti
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {successCases.map((caseItem) => (
              <CarouselItem key={caseItem.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link to={`/success/${caseItem.id}`}>
                  <Card className="overflow-hidden rounded-2xl border-0 shadow-lg group cursor-pointer">
                    <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-6">
                        <h3 className="text-white text-2xl font-heading font-bold mb-2">
                          {caseItem.title}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {caseItem.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessCarousel;
