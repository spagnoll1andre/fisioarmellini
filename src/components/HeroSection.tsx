import { Star, Quote, Sparkle, Smile, Activity } from "lucide-react";
import doctorHero from "@/assets/hero_section_chi_sono.png";
import testimonialPatient from "@/assets/testimonial-patient.jpg";

const HeroSection = () => {
  return (
    // Sezione "corta" (ripristinata a pt-24 pb-16)
    <section className="bg-secondary pt-1 pb-1 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Colonna Sinistra (Testo) */}
          <div className="space-y-4 relative z-10">
            {/* Tag "MI PRESENTO" aggiornato */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full">
              <span className="text-sm font-medium text-primary">• MI PRESENTO</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground leading-tight">
              Dott.ssa Armellini
            </h1>

            {/* Paragrafo aggiornato (più corto) */}
            <p className="text-lg text-foreground/80 max-w-lg">
              Un approccio fisioterapico mirato, umano e scientifico.
            </p>

            {/* Icona decorativa (Scintilla) */}
            <Sparkle className="w-10 h-10 text-primary absolute -bottom-16 -left-8 opacity-50" />
          </div>

          {/* Colonna Destra (Immagine e Card) */}
          <div className="relative">

            <div className="relative z-10">
              {/* Immagine rimpicciolita come da tua modifica (w-3/4) */}
              <img
                src={doctorHero}
                alt="Dott.ssa Armellini"
                className="w-10/12 mx-auto h-10/12 rounded-3xl"
              />
            </div>

            {/* Floating testimonial card (SPOSTATA PIU' IN ALTO) */}
            {/* Modificato da -bottom-12 a bottom-8 */}
            <div className="absolute bottom-8 right-0 bg-background rounded-2xl shadow-xl p-6 max-w-xs z-20 hidden md:block">
              {/* Icona virgolette verde */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Quote className="w-5 h-5" />
              </div>
              <div className="flex items-start gap-4">
                <img
                  src={testimonialPatient}
                  alt="Andrea Spagnolli"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  {/* Testo recensione aggiornato */}
                  <p className="text-sm text-foreground/80 mb-2">
                    "Dopo essermi operato ad entrambe le spalle, mi ha rimesso in piedi in tempi record per tornare a gareggiare e a stare bene"
                  </p>
                  <p className="text-sm font-semibold text-foreground uppercase">ANDREA SPAGNOLLI</p>
                  {/* Quadratini verdi (al posto delle stelle) */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary rounded-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating update card (Spostata e Aggiornata) */}
            <div className="absolute bottom-8 -left-8 bg-background rounded-2xl shadow-xl p-6 max-w-xs z-20 hidden lg:block">
              <div className="flex items-center gap-3">
                {/* Icona medicale (Activity) */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">In Continuo</p>
                  <p className="text-sm font-semibold text-foreground">aggiornamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;