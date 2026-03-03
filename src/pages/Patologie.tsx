import Header from "@/components/Header";
import PatologieHeader from "@/components/PatologieHeader";
import ConditionsSection from "@/components/ConditionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const Patologie = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <PatologieHeader />
                <ConditionsSection />
                <HowItWorksSection />
            </main>
            <Footer />
        </div>
    );
};

export default Patologie;
