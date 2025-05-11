
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

// Gallery images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: '@/assets/chevrolet(1).jpg',
    category: 'vehicles',
    title: 'Luxury Chevrolet Suburban'
  },
  {
    id: 2,
    src: '@/assets/Cadillac-Escalade(6).jpg',
    category: 'vehicles',
    title: 'Luxury Cadillac Escalade'
  },
  {
    id: 3,
    src: '@/assets/Cadillac-Escalade(2).jpg',
    category: 'vehicles',
    title: 'Luxury Cadillac Escalade'
  },
  {
    id: 4,
    src: '@/assets/wedding-transportation-near-me-(1).webp',
    category: 'events',
    title: 'Wedding Transportation'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80',
    category: 'landmarks',
    title: 'Washington Monument'
  },
  {
    id: 7,
    src: '@/assets/R.jpeg',
    category: 'vehicles',
    title: 'Luxury SUV Interior'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1508974462591-3c124867fdf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80',
    category: 'landmarks',
    title: 'US Capitol'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80',
    category: 'events',
    title: 'Corporate Event'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80',
    category: 'landmarks',
    title: 'Lincoln Memorial'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80',
    category: 'events',
    title: 'Special Occasion'
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | { src: string; title: string }>(null);
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (src: string, title: string) => {
    setSelectedImage({ src, title });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-luxury-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Our <span className="gold-text">Gallery</span>
            </h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Browse through images of our luxury vehicles, special events, and satisfied clients.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'all'
                    ? 'bg-luxury-primary text-black'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'vehicles'
                    ? 'bg-luxury-primary text-black'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
                onClick={() => setActiveFilter('vehicles')}
              >
                Vehicles
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'events'
                    ? 'bg-luxury-primary text-black'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
                onClick={() => setActiveFilter('events')}
              >
                Events
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  activeFilter === 'landmarks'
                    ? 'bg-luxury-primary text-black'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
                onClick={() => setActiveFilter('landmarks')}
              >
                Landmarks
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(image.src, image.title)}
              >
                <div className="relative h-64 group">
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                      <p className="capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="max-w-5xl w-full">
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75"
              onClick={closeLightbox}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <h3 className="text-white text-center text-xl mt-4">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
