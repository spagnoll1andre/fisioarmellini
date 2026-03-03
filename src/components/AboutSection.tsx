import doctorPortrait from "@/assets/sezione_mipresento_sfondotrasparente.png";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={doctorPortrait}
                alt="Dott.ssa Francesca Armellini"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 bg-background p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold">60+</div>
                  <div className="text-sm text-muted-foreground">Trattamenti certificati</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-mint-accent text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              • CHI SONO
            </div>
            <h2 className="text-5xl font-bold mb-6">Mi Presento</h2>
            <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
              Sono la Dott.ssa Francesca Armellini, fisioterapista specializzata con oltre 10 anni
              di esperienza nel trattamento di patologie muscolo-scheletriche. La mia missione è
              offrire cure personalizzate che uniscono competenza scientifica ed empatia umana.
            </p>
            <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
              Mi dedico costantemente all'aggiornamento professionale per garantire ai miei pazienti
              le tecniche più innovative ed efficaci. Ogni trattamento è studiato su misura per le
              esigenze specifiche della persona.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Credo fermamente in un approccio olistico che considera non solo il sintomo, ma la
              persona nella sua interezza, accompagnandola verso il recupero completo e duraturo.
            </p>
            <Link to="/chi-sono">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Scopri di più
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
