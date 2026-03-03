import { useState } from "react";
import { Button } from "@/components/ui/button";
import physioImage from "@/assets/hero-treatment-1.jpg";
import physioImage2 from "@/assets/hero-treatment-2.jpg";
import shoulderAnatomy from "@/assets/shoulder-anatomy.jpg";
import spineAnatomy from "@/assets/spine-anatomy.jpg";
import kneeAnatomy from "@/assets/knee-anatomy.jpg";

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
    title: "Borsite",
    benefits: [
      "Sintomi comuni: gonfiore e dolore localizzato",
      "Cause frequenti: infiammazione da trauma o attrito",
      "Approccio terapeutico: riduzione infiammazione e mobilità"
    ]
  },
  {
    id: 3,
    image: spineAnatomy,
    title: "Cefalea (mal di testa)",
    benefits: [
      "Sintomi comuni: dolore pulsante o tensivo",
      "Cause frequenti: tensioni cervicali, stress, postura",
      "Approccio terapeutico: rilascio tensioni e riequilibrio"
    ]
  },
  {
    id: 4,
    image: physioImage2,
    title: "Cervicalgia",
    benefits: [
      "Sintomi comuni: dolore al tratto cervicale",
      "Cause frequenti: postura, stress, rigidità muscolare",
      "Approccio terapeutico: mobilizzazione e decontrattura"
    ]
  },
  {
    id: 5,
    image: kneeAnatomy,
    title: "Colpo di frusta",
    benefits: [
      "Sintomi comuni: dolore acuto e rigidità cervicale",
      "Cause frequenti: trauma improvviso del rachide",
      "Approccio terapeutico: recupero mobilità e stabilità"
    ]
  },
  {
    id: 7,
    image: physioImage,
    title: "Coxartrosi (anca)",
    benefits: [
      "Sintomi comuni: dolore all'anca e rigidità",
      "Cause frequenti: degenerazione articolare",
      "Approccio terapeutico: terapia manuale e rinforzo"
    ]
  },
  {
    id: 8,
    image: spineAnatomy,
    title: "Lombalgia",
    benefits: [
      "Sintomi comuni: tensione o dolore lombare/dorsale",
      "Cause frequenti: postura, stress, sforzi ripetuti",
      "Approccio terapeutico: riequilibrio muscolare e mobilità"
    ]
  },
  {
    id: 10,
    image: kneeAnatomy,
    title: "Dolore articolare",
    benefits: [
      "Sintomi comuni: dolore in movimento o a riposo",
      "Cause frequenti: infiammazione o sovraccarico",
      "Approccio terapeutico: terapia manuale ed esercizi"
    ]
  },
  {
    id: 11,
    image: shoulderAnatomy,
    title: "Dolori muscolari",
    benefits: [
      "Sintomi comuni: indolenzimento e tensione",
      "Cause frequenti: sforzo, infiammazione o postura",
      "Approccio terapeutico: decontrattura e riequilibrio"
    ]
  },
  {
    id: 12,
    image: physioImage,
    title: "Dorsalgia",
    benefits: [
      "Sintomi comuni: dolore nella zona dorsale",
      "Cause frequenti: rigidità, postura, sovraccarico",
      "Approccio terapeutico: mobilizzazione e rinforzo"
    ]
  },
  {
    id: 13,
    image: spineAnatomy,
    title: "Epicondilite / Epitrocleite",
    benefits: [
      "Sintomi comuni: dolore al gomito e presa debole",
      "Cause frequenti: sovraccarico tendineo",
      "Approccio terapeutico: terapia manuale ed esercizi specifici"
    ]
  },
  {
    id: 14,
    image: physioImage2,
    title: "Fascite plantare",
    benefits: [
      "Sintomi comuni: dolore al tallone o alla pianta",
      "Cause frequenti: infiammazione della fascia plantare",
      "Approccio terapeutico: stretching e riequilibrio del carico"
    ]
  },
  {
    id: 15,
    image: kneeAnatomy,
    title: "Gonartrosi (ginocchio)",
    benefits: [
      "Sintomi comuni: dolore e rigidità al ginocchio",
      "Cause frequenti: degenerazione articolare",
      "Approccio terapeutico: mobilità, forza e controllo"
    ]
  },
  {
    id: 16,
    image: shoulderAnatomy,
    title: "Instabilità di spalla",
    benefits: [
      "Sintomi comuni: cedimento e dolore nei movimenti",
      "Cause frequenti: lassità legamentosa o traumi",
      "Approccio terapeutico: rinforzo e stabilizzazione articolare"
    ]
  },
  {
    id: 17,
    image: physioImage,
    title: "Lombalgia",
    benefits: [
      "Sintomi comuni: dolore e rigidità lombare",
      "Cause frequenti: postura, sforzi o tensioni muscolari",
      "Approccio terapeutico: mobilità e riequilibrio muscolare"
    ]
  },
  {
    id: 20,
    image: kneeAnatomy,
    title: "Sciatalgia",
    benefits: [
      "Sintomi comuni: dolore lombare irradiato alla gamba",
      "Cause frequenti: compressione del nervo sciatico",
      "Approccio terapeutico: decompressione e riequilibrio posturale"
    ]
  },
  {
    id: 21,
    image: shoulderAnatomy,
    title: "Scoliosi",
    benefits: [
      "Sintomi comuni: asimmetrie posturali e dolore",
      "Cause frequenti: alterazioni strutturali o funzionali della colonna",
      "Approccio terapeutico: esercizi correttivi e controllo posturale"
    ]
  },
];

const ConditionsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedConditions = isExpanded ? conditions : conditions.slice(0, 6);

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
    <section id="conditions" className="w-full bg-background py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedConditions.map((condition) => (
            <ConditionCard key={condition.id} condition={condition} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Mostra meno" : "Tutte le patologie"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
