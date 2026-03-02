import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react"; // 1. Import useEffect

const testimonials = [
  {
    name: "Isabella De Luca",
    text: " Sono stata in cura dalla dott.ssa Armellini prima per un problema al 
sovraspinoso e, successivamente, per una fastidiosissima spondilouncoartrosi cervicale...Entrambe 
le patologie risolte egregiamente con pazienza e dedizione.Attenta e scrupolosa, Francesca mi ha 
sin da subito suggerito alcuni esercizi da fare a casa per rendere il percorso riabilitativo più veloce e 
questo la dice lunga sulla sua etica professionale!!! Prima di conoscerla ho girato numerosi "centri 
di eccellenza" che, al contrario, facevano di tutto pur di prolungare le sedute presso i loro studi. 
Ultimo particolare, ma solo perchè altrimenti sarei prolissa, è l'aspetto empatico: Francesca ha una 
capacità di ascolto fuori dal comune per una ragazza della sua età: pur essendo molto più giovane 
di me(potrebbe essere mia figlia!!!) è riuscita a cogliere in me degli aspetti di somatizzazione 
importanti, riconoscendo i quali, sono migliorata ancora più velocemente.Trovare degli specialisti 
così preparati è davvero una fortuna...Provare per credere!!!!!",
    rating: 5,
    //image: "//esempio.png", //se voglio l'immagine inserisco questo per ogni recensione 
  },
{
  name: "Bernardo Boria",
    text: "Dopo anni di problemi alla spalla e al gomito e vari specialisti pagati a vuoto 
  f
inalmente trovo una fisioterapista competente e soprattutto che sa ascoltare le esigenze del
  paziente(cosa non scontata nel settore fisioterapico).Già dopo poche sedute sto avendo ottimi
  risultati.Grazie mille.",
  rating: 5,
  },
{
  name: "Franca Paggi",
    text: " La Dottoressa Armellini è la mia salvezza. È molto attenta e professionale, ho fatto 
con lei la riabilitazione dopo una protesi all'anca. La migliore, consiglio a tutti di andarci!!!",
  rating: 5,
  },
{
  name: "Chiara Antonucci",
    text: "Ho avuto la fortuna di essere seguita dalla Dr.ssa Armellini sia dopo un 
intervento chirurgico che per dolori alla schiena che mi tormentavano da anni.La sua 
professionalità è semplicemente impareggiabile.Fa tantissime domande, ascolta attentamente e si 
prende davvero il tempo necessario per capire a fondo la situazione prima di procedere con il
  trattamento.La sua attenzione ai dettagli e la cura con cui gestisce ogni seduta mi hanno fatto 
sentire sempre in ottime mani.Grazie a lei ho visto miglioramenti concreti che non pensavo 
fossero possibili.Non andrò mai più da un’altra fisioterapista — la consiglio vivamente a chiunque 
cerchi competenza, dedizione e risultati reali!",
  rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //scroll automatico
  useEffect(() => {

    const intervalId = setInterval(() => {
      next();
    }, 2000);


    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];


  const visibleCount = 3;

  const maxStartIndex = Math.max(0, testimonials.length - visibleCount);

  const tempStartIndex = Math.max(0, currentIndex - 1);

  const startIndex = Math.min(tempStartIndex, maxStartIndex);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start mb-12">

          <div>
            <div className="inline-block bg-mint-light text-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              • TESTIMONIAL
            </div>
            <h2 className="text-5xl font-bold">Riscontri dei miei pazienti</h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-mint-light rounded-3xl p-12 mb-8">
            <p className="text-2xl font-semibold leading-relaxed mb-6">"{current.text}"</p>
          </div>

          <div className="flex justify-center gap-6">
            {/* 4. Slice the array before mapping */}
            {testimonials.slice(startIndex, startIndex + visibleCount).map((testimonial, i) => {

              const originalIndex = startIndex + i;

              return (
                <button
                  key={originalIndex}
                  onClick={() => setCurrentIndex(originalIndex)}
                  className={`p-6 rounded-2xl transition-all ${originalIndex === currentIndex
                      ? "bg-mint-light border-2 border-primary"
                      : "bg-background border-2 border-border hover:bg-mint-light"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;