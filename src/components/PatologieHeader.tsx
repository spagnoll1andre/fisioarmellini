import doctorHero from "@/assets/hero_section_patologiecurate.png";

const PatologieHeader = () => {
  return (
    <section className="bg-secondary pt-1 pb-1 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Colonna Sinistra (Testo) */}
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full">
              <span className="text-sm font-medium text-primary">• PATOLOGIE</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground leading-tight">
              Patologie Curate
            </h1>

            <p className="text-lg text-foreground/80 max-w-lg">
              Affronto un'ampia gamma di patologie, muscolari e dermatofunzionali.
              Di seguito una panoramica completa.
            </p>
          </div>

          {/* Colonna Destra (Immagine) */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={doctorHero}
                alt="Dott.ssa Armellini - Patologie Curate"
                className="w-10/12 mx-auto h-10/12 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatologieHeader;
