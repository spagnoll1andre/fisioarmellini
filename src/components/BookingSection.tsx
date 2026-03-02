const BookingSection = () => {
  return (
    <section id="booking" className="py-20 px-6 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Prenota il tuo appuntamento online
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
          Scegli la data e l'orario che preferisci. La conferma è immediata.
        </p>

        <div className="max-w-4xl mx-auto bg-card border-2 border-border rounded-lg p-1 sm:p-4 overflow-hidden">
          <iframe
            src="https://fisioarmellini.setmore.com/"
            width="100%"
            className="w-full min-h-[650px] md:min-h-[750px] rounded-md border-0"
            frameBorder="0"
            scrolling="auto"
            allow="web-share; payment"
            title="Prenotazione online"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
