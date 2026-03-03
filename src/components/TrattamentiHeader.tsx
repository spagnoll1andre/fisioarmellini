import { Heart, Stethoscope } from "lucide-react";

const TrattamentiHeader = () => {
  return (
    <section className="relative bg-secondary py-20 px-6 overflow-hidden">
      {/* Decorative graphics */}
      <div className="absolute top-10 right-20 opacity-20">
        <Stethoscope size={120} className="text-primary" strokeWidth={1} />
      </div>
      <div className="absolute bottom-10 left-20 opacity-20">
        <Heart size={100} className="text-primary" strokeWidth={1} />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
          Trattamenti Eseguiti
        </h1>
        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
          Un approccio integrato e personalizzato per ogni esigenza riabilitativa.
          Di seguito tutti i trattamenti disponibili.
        </p>
      </div>
    </section>
  );
};

export default TrattamentiHeader;
