import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import physioImage from "@/assets/hero-treatment-1.jpg";
import physioImage2 from "@/assets/hero-treatment-2.jpg";
import shoulderAnatomy from "@/assets/shoulder-anatomy.jpg";

const conditions = [
  {
    id: 1,
    image: shoulderAnatomy,
    title: "Artrosi",
    benefits: [
      "Sintomi comuni: dolore e rigidità articolare",
      "Cause frequenti: usura cartilagine o sovraccarico",
      "Approccio terapeutico: terapia manuale ed esercizi mirati"
    ]
  },
  {
    id: 2,
    image: physioImage,
    title: "Cervicalgia",
    benefits: [
      "Sintomi comuni: dolore al tratto cervicale",
      "Cause frequenti: postura, stress, rigidità muscolare",
      "Approccio terapeutico: mobilizzazione e decontrattura"
    ]
  },
  {
    id: 3,
    image: physioImage2,
    title: "Lombalgia",
    benefits: [
      "Sintomi comuni: dolore e rigidità lombare",
      "Cause frequenti: postura, sforzi o tensioni muscolari",
      "Approccio terapeutico: mobilità e riequilibrio muscolare"
    ]
  }
];

const ConditionsSectionHome = () => {
  const ConditionCard = ({ condition }: { condition: typeof conditions[0] }) => (
    <div className="space-y-6 flex flex-col border border-border rounded-2xl p-6 h-full bg-card">
      <img
        src={condition.image}
        alt={condition.title}
        className="rounded-2xl w-full h-48 object-cover"
      />
      <div className="space-y-4 flex-1">
        <h3 className="text-2xl font-bold text-foreground">
          {condition.title}
        </h3>
        <ul className="space-y-3">
          {condition.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground text-sm leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="conditions" className="w-full bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Patologie Curate
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Affronto un'ampia gamma di patologie, muscolari e dermatofunzionali.
            Di seguito una panoramica completa.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {conditions.map((condition) => (
              <CarouselItem key={condition.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <ConditionCard condition={condition} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="flex justify-center mt-12">
          <Link to="/patologie">
            <Button size="lg" className="rounded-full px-8">
              Vedi tutte le patologie
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSectionHome;
