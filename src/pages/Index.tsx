
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FleetSection from "@/components/FleetSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <AboutSection />
        <FleetSection />
        <ServicesSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
