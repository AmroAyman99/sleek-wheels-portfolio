
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-luxury-secondary relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Experience Premium Transportation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book our luxury vehicles for your next special event, business trip, or airport transfer.
            Let us take care of your transportation needs with style and professionalism.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 rotate-12 transform-gpu scale-125">
          <div className="w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-luxury-primary via-transparent to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
