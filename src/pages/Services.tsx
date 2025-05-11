
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import airportImg from '@/assets/airport.jpeg';
import corporateImg from '@/assets/coroporate-transportation3.jpeg';
import weddingImg from '@/assets/wedding-transportation-near-me-(1).webp';
import specialEventsImg from '@/assets/red-carpet-limo_721969-1169.avif';
import cityToursImg from '@/assets/photo-1501466044931-62695aada8e9.avif';
import hourlyChartersImg from '@/assets/Charters-1.jpg';

const services = [
  {
    title: 'Airport Transfers',
    description: 'Our airport transfer service ensures you reach your destination promptly and comfortably. We monitor flight schedules for any delays and adjust pickup times accordingly. Your chauffeur will meet you at the arrivals area, assist with luggage, and escort you to your vehicle for a stress-free journey.',
    image: airportImg,
    features: [
      'Flight tracking',
      'Meet & greet service',
      'Luggage assistance',
      'Complimentary wait time',
      'Child seats available upon request',
      '24/7 availability'
    ]
  },
  {
    title: 'Corporate Transportation',
    description: 'Make the right impression with our corporate transportation services. Whether you need transportation for executives, clients, or staff, we provide reliable, punctual, and professional service. Our vehicles are equipped with Wi-Fi and charging ports to keep you connected on the go.',
    image: corporateImg,
    features: [
      'Corporate accounts available',
      'Professional chauffeurs',
      'Wi-Fi enabled vehicles',
      'Multiple pickup coordination',
      'Event transportation planning',
      'Confidentiality guaranteed'
    ]
  },
  {
    title: 'Wedding Transportation',
    description: 'Your special day deserves nothing but the best. Our wedding transportation service ensures you and your wedding party arrive in style and on time. We offer special packages that include decorated vehicles, red carpet service, and champagne for the newlyweds.',
    image: weddingImg,
    features: [
      'Decorated vehicles',
      'Red carpet service',
      'Complimentary champagne',
      'Coordination with wedding planner',
      'Photo opportunities',
      'Multiple vehicle options'
    ]
  },
  {
    title: 'Special Events',
    description: 'Arrive in style to proms, parties, concerts, sporting events, or any special occasion. Our chauffeurs ensure you have a memorable experience from start to finish. We can accommodate individual or group transportation needs with various vehicle options.',
    image: specialEventsImg,
    features: [
      'Timely pickups and drop-offs',
      'Custom routes available',
      'Group transportation options',
      'VIP entrance arrangements',
      'Extended service hours',
      'Personalized itineraries'
    ]
  },
  {
    title: 'City Tours',
    description: 'Explore Washington D.C. and the surrounding areas with our guided city tours. Our knowledgeable chauffeurs double as guides, sharing fascinating information about landmarks and attractions. Customize your tour or choose from our popular itineraries.',
    image: cityToursImg,
    features: [
      'Customizable routes',
      'Knowledgeable guides',
      'Historical landmarks',
      'Hidden gems',
      'Flexible durations',
      'Comfortable, climate-controlled vehicles'
    ]
  },
  {
    title: 'Hourly Charters',
    description: 'Book our vehicles by the hour for ultimate flexibility. Perfect for business meetings, shopping trips, restaurant hopping, or any multi-stop journeys. Your chauffeur will remain at your disposal throughout the reserved time, ensuring your schedule runs smoothly.',
    image: hourlyChartersImg,
    features: [
      'Flexible scheduling',
      'Dedicated chauffeur',
      'Multiple stops',
      'No hidden fees',
      'Luxury vehicles',
      'Last-minute bookings available'
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-luxury-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Our <span className="gold-text">Premium Services</span>
            </h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Discover our range of luxury transportation services designed to meet your needs with style, comfort, and professionalism.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-serif font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 gold-text">Service Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-luxury-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-luxury-primary hover:bg-luxury-primary/90 text-black"
                    asChild
                  >
                    <Link to="/book">Book This Service</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Have Questions About Our <span className="gold-text">Services</span>?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Contact our team for more information about our services or to discuss custom transportation solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-luxury-primary hover:bg-luxury-primary/90 text-black"
              size="lg"
              asChild
            >
              <Link to="/book">Book a Service</Link>
            </Button>
            <Button 
              variant="outline"
              className="border-luxury-secondary text-luxury-secondary hover:bg-luxury-secondary hover:text-white"
              size="lg"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
