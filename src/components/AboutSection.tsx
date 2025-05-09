
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://inv.assets.sincrod.com/RTT/Cadillac/2018/3752703/default/int_HJU_deg04.jpg" 
              alt="Luxury car interior" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              About <span className="gold-text">LIMO MO</span>
            </h2>
            
            <p className="text-gray-700 mb-6">
              At LIMO MO, based in Washington, D.C., we provide a premium car rental experience tailored to your needs. Whether you're looking for luxury vehicles for a special event, a business trip, or just to ride in style, we've got you covered.
            </p>
            
            <p className="text-gray-700 mb-6">
              Our fleet includes a wide range of high-end cars, and we proudly offer competitive prices, exceptional customer service, and delivery to any location. At LIMO MO, your comfort and satisfaction are always our top priorities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-luxury-primary/10 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Professional Drivers</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-luxury-primary/10 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Luxury Vehicles</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-luxury-primary/10 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">24/7 Availability</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-luxury-primary/10 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Competitive Rates</span>
              </div>
            </div>
            
            <Button className="bg-luxury-primary hover:bg-luxury-primary/90 text-black" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
