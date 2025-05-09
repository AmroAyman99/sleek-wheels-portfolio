
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Airport Transfers',
    description: 'Reliable and punctual airport pickup and drop-off services. Our drivers track flights and wait for delayed arrivals at no extra charge.',
    icon: (
      <svg className="h-8 w-8 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    title: 'Corporate Transportation',
    description: 'Impress clients and colleagues with our premium corporate transportation services. Perfect for business meetings, conferences, and events.',
    icon: (
      <svg className="h-8 w-8 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Wedding Transportation',
    description: 'Make your special day even more memorable with our luxurious wedding transportation services. We offer special packages for the bride, groom, and wedding party.',
    icon: (
      <svg className="h-8 w-8 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Special Events',
    description: 'Arrive in style to proms, parties, anniversaries, or any special occasion. Our vehicles and professional service will ensure a memorable entrance.',
    icon: (
      <svg className="h-8 w-8 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: 'City Tours',
    description: 'Explore Washington D.C. with our guided city tours. Our knowledgeable drivers double as guides to show you the best sights and attractions.',
    icon: (
      <svg className="h-8 w-8 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Hourly Charters',
    description: 'Book our vehicles by the hour for your convenience. Perfect for shopping trips, restaurant hopping, or any multi-stop journeys.',
    icon: (
      <svg className="h-8 w-8 text-luxury-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-luxury-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Our <span className="gold-text">Premium Services</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We offer a wide range of professional transportation services to meet your needs. From airport transfers to special events, our team ensures a comfortable and luxurious experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-luxury-primary hover:bg-luxury-primary/90 text-black"
            size="lg"
            asChild
          >
            <Link to="/book">Book a Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
