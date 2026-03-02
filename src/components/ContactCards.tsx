import { MapPin, Phone, Mail } from "lucide-react";

const ContactCards = () => {
  const contacts = [
    {
      icon: MapPin,
      title: "Dove sono",
      content: "Via Giuseppe mercalli 11 Roma Parioli",
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "+39 3791009600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@fisioterapia.it",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <contact.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {contact.title}
              </h3>
              <p className="text-foreground">{contact.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
