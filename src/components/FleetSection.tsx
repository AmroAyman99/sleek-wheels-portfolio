import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription 
} from '@/components/ui/card';

const vehicles = [
  {
    id: 1,
    name: 'Cadillac Escalade (Black)',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    description: 'Dynamic 6.2-liter V8 engine with Dynamic Fuel Control System. 22-inch 14-spoke aluminum wheels with a glossy silver finish. Electrically adjustable 10-way driver and passenger front seats with heating feature.',
    features: ['Seats up to 7 passengers', 'Premium Sound System', 'Heated and Cooled Seats', 'WiFi Hotspot', 'Advanced Safety Features']
  },
  {
    id: 2,
    name: 'Cadillac Escalade (White)',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    description: 'Dynamic 6.2-liter V8 engine with Dynamic Fuel Control System. 22-inch 14-spoke aluminum wheels with a glossy silver finish. Electrically adjustable 10-way driver and passenger front seats with heating feature.',
    features: ['Seats up to 7 passengers', 'Premium Sound System', 'Heated and Cooled Seats', 'WiFi Hotspot', 'Advanced Safety Features']
  },
  {
    id: 3,
    name: 'Chevrolet Suburban',
    image: 'https://images.unsplash.com/photo-1565518782968-9f24e58f678b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    description: 'A powerful SUV designed to take your driving experience to new heights. Equipped with a 6.2-liter V8 engine with 420 horsepower. Experience confidence in every maneuver with advanced features.',
    features: ['Seats up to 8 passengers', 'Spacious Interior', 'Powerful V8 Engine', 'Entertainment System', 'Smart Storage Solutions']
  }
];

const FleetSection = () => {
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our <span className="gold-text">Luxury Fleet</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Experience premium transportation with our selection of high-end vehicles. Each car is meticulously maintained and equipped with the latest features for your comfort and convenience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src={activeVehicle.image} 
                alt={activeVehicle.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm">
                <h3 className="text-white text-xl font-bold">{activeVehicle.name}</h3>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-4">{activeVehicle.name}</h3>
              <p className="text-gray-700 mb-6">{activeVehicle.description}</p>
              
              <h4 className="text-lg font-bold mb-3 gold-text">Features:</h4>
              <ul className="space-y-2 mb-8">
                {activeVehicle.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-luxury-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {vehicles.map((vehicle) => (
            <Button
              key={vehicle.id}
              variant={activeVehicle.id === vehicle.id ? "default" : "outline"}
              className={`h-auto py-3 ${activeVehicle.id === vehicle.id ? 'bg-luxury-primary text-black' : 'hover:bg-luxury-primary/10'}`}
              onClick={() => setActiveVehicle(vehicle)}
            >
              {vehicle.name}
            </Button>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-luxury-secondary hover:bg-luxury-secondary/90 text-white" size="lg" asChild>
            <Link to="/fleet">View Full Fleet Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
