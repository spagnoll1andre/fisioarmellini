import { User, Briefcase, Heart, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: User,
      number: "6+",
      description: "Anni di esperienza nel settore della fisioterapia",
    },
    {
      icon: Briefcase,
      number: "92%+",
      description: "Tasso di successo nei trattamenti completati",
    },
    {
      icon: Heart,
      number: "500+",
      description: "Pazienti soddisfatti e migliorati",
    },
    {
      icon: Award,
      number: "1200+",
      description: "Ore di formazione continua e aggiornamento",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center py-8 ${index < stats.length - 1 ? "md:border-r border-border" : ""
                }`}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full border-2 border-success-green flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-success-green" />
                </div>
              </div>
              <div className="text-5xl font-heading font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <p className="text-foreground/70 max-w-xs mx-auto">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
