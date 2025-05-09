
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-luxury-secondary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury car" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-20 mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 animate-fade-in">
            Premium <span className="gold-text">Chauffeur</span> Service
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-slide-in">
            Experience the ultimate in luxury transportation. We provide professional driver services for any occasion with our premium fleet of vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-luxury-primary hover:bg-luxury-primary/90 text-black font-medium text-lg px-8"
              asChild
            >
              <Link to="/book">Book Now</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 font-medium text-lg px-8"
              asChild
            >
              <Link to="/fleet">View Our Fleet</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
