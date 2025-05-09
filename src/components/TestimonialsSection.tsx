
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah T.',
    location: 'Washington D.C.',
    quote: 'Absolutely top-notch service! The car was spotless, arrived on time, and the driver was very professional. Highly recommend LIMO MO!',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'David M.',
    location: 'Arlington, VA',
    quote: 'LIMO MO made my wedding day extra special. The luxury car was stunning and the experience was unforgettable. Thank you!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Jasmine K.',
    location: 'Bethesda, MD',
    quote: 'Great customer support and very fair pricing. I needed a car last minute and they delivered in less than an hour!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Michael P.',
    location: 'Alexandria, VA',
    quote: 'The most reliable car service I\'ve ever used. Always punctual, professional, and the vehicles are immaculate.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experiences with LIMO MO.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-luxury-primary">
                  <img 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <div className="mb-4">
                  <svg className="h-10 w-10 text-luxury-primary/30 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-2.2 0-4 1.8-4 4v12h12V12h-6c0-2.2 1.8-4 4-4h2V0h-2C11.6 0 10 8 10 8zM26 8c-2.2 0-4 1.8-4 4v12h12V12h-6c0-2.2 1.8-4 4-4h2V0h-2C27.6 0 26 8 26 8z" />
                  </svg>
                </div>
                
                <p className="text-xl text-gray-700 italic mb-6">
                  {testimonials[activeTestimonial].quote}
                </p>
                
                <div>
                  <h4 className="text-lg font-bold gold-text">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].location}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end space-x-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-luxury-primary hover:text-black hover:border-luxury-primary transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-luxury-primary hover:text-black hover:border-luxury-primary transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${
                  index === activeTestimonial ? 'bg-luxury-primary' : 'bg-gray-300'
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
