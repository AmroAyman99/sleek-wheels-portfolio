
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    id: 1,
    name: 'Sarah T.',
    location: 'Washington D.C.',
    quote: 'Absolutely top-notch service! The car was spotless, arrived on time, and the driver was very professional. Highly recommend LIMO MO!',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  },
  {
    id: 2,
    name: 'David M.',
    location: 'Arlington, VA',
    quote: 'LIMO MO made my wedding day extra special. The luxury car was stunning and the experience was unforgettable. Thank you!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  },
  {
    id: 3,
    name: 'Jasmine K.',
    location: 'Bethesda, MD',
    quote: 'Great customer support and very fair pricing. I needed a car last minute and they delivered in less than an hour!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  },
  {
    id: 4,
    name: 'Michael P.',
    location: 'Alexandria, VA',
    quote: 'The most reliable car service I\'ve ever used. Always punctual, professional, and the vehicles are immaculate.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  },
  {
    id: 5,
    name: 'Jennifer L.',
    location: 'Silver Spring, MD',
    quote: 'I use LIMO MO for all my business trips. Their service is consistently excellent and their drivers are knowledgeable about the area.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  },
  {
    id: 6,
    name: 'Robert K.',
    location: 'Fairfax, VA',
    quote: 'My family and I had a wonderful experience with LIMO MO during our DC vacation. Our driver was friendly and suggested some great off-the-beaten-path attractions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  },
  {
    id: 7,
    name: 'Emily C.',
    location: 'Georgetown, DC',
    quote: 'The Cadillac Escalade was perfect for our girls\' night out. Spacious, luxurious, and our driver was patient as we made multiple stops throughout the evening.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4
  },
  {
    id: 8,
    name: 'William T.',
    location: 'McLean, VA',
    quote: 'I\'ve tried several luxury car services in DC, and LIMO MO stands head and shoulders above the rest. Their attention to detail and customer service is unmatched.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-luxury-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Client <span className="gold-text">Testimonials</span>
            </h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience with LIMO MO.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 15.585l-6.327 3.323 1.209-7.037L.172 7.33l7.056-1.026L10 0l2.772 6.304 7.056 1.026-4.71 4.541 1.209 7.037L10 15.585z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote>
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-luxury-primary/30" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-2.2 0-4 1.8-4 4v12h12V12h-6c0-2.2 1.8-4 4-4h2V0h-2C11.6 0 10 8 10 8zM26 8c-2.2 0-4 1.8-4 4v12h12V12h-6c0-2.2 1.8-4 4-4h2V0h-2C27.6 0 26 8 26 8z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    {testimonial.quote}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-luxury-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Join Our Satisfied Clients
            </h2>
            <p className="text-gray-300 mb-8">
              Experience the exceptional service and luxury that has earned us consistent 5-star reviews from our clients. Book your ride with LIMO MO today.
            </p>
            <div className="flex justify-center">
              <a 
                href="/book" 
                className="px-8 py-3 rounded bg-luxury-primary text-black font-medium hover:bg-luxury-primary/90 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
