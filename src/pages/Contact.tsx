
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const phoneNumber = "(202)-4699-763";
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/[()-\s]/g, '')}`;
    toast({
      title: "Calling",
      description: `Redirecting to call ${phoneNumber}`,
      duration: 3000
    });
  };
  
  const handleSmsClick = () => {
    window.location.href = `sms:${phoneNumber.replace(/[()-\s]/g, '')}`;
    toast({
      title: "SMS",
      description: `Opening SMS to ${phoneNumber}`,
      duration: 3000
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-luxury-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Contact <span className="gold-text">Us</span>
            </h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Have questions or ready to book? Get in touch with our team for exceptional service and support.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Get in <span className="gold-text">Touch</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-luxury-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-luxury-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-700">{phoneNumber}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-luxury-primary/10 flex items-center justify-center mr-4">
                      <MessageSquare className="h-5 w-5 text-luxury-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Text Message</h3>
                      <p className="text-gray-700">Send us an SMS anytime</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Availability</h3>
                  <p className="text-gray-700">
                    Our driver services are available <span className="font-bold">24/7</span>, all week.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Contact <span className="gold-text">Options</span>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl mb-3">How would you like to reach us?</h3>
                    <p className="text-gray-600 mb-6">
                      Simply click one of the options below to connect with our team directly.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        onClick={handleCallClick}
                        className="bg-luxury-primary hover:bg-luxury-primary/90 text-black py-8 h-auto"
                        size="lg"
                      >
                        <Phone className="mr-2 h-6 w-6" />
                        <div className="text-left">
                          <div className="text-lg font-bold">Call Now</div>
                          <div className="text-sm">{phoneNumber}</div>
                        </div>
                      </Button>
                      
                      <Button
                        onClick={handleSmsClick}
                        className="bg-luxury-secondary hover:bg-luxury-secondary/90 text-white py-8 h-auto"
                        size="lg"
                      >
                        <MessageSquare className="mr-2 h-6 w-6" />
                        <div className="text-left">
                          <div className="text-lg font-bold">Send SMS</div>
                          <div className="text-sm">{phoneNumber}</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-xl mb-3">Why Choose Us?</h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                      <li>24/7 availability for your convenience</li>
                      <li>Professional and courteous drivers</li>
                      <li>Luxury vehicles meticulously maintained</li>
                      <li>Competitive rates with transparent pricing</li>
                      <li>Personalized service for all your transportation needs</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Our <span className="gold-text">Location</span>
                </h2>
                
                <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.15086646965!2d-77.08461357577815!3d38.897676595094955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1616453447213!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Map of Washington DC"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
