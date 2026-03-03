import Header from "@/components/Header";
import TrattamentiHeader from "@/components/TrattamentiHeader";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const Trattamenti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TrattamentiHeader />
        <TreatmentsGrid />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Trattamenti;
