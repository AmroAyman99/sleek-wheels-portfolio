
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-luxury-secondary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold gold-text">LIMO MO</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-luxury-primary focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-luxury-primary transition-colors font-medium">
            Home
          </Link>
          <Link to="/fleet" className="text-white hover:text-luxury-primary transition-colors font-medium">
            Our Fleet
          </Link>
          <Link to="/services" className="text-white hover:text-luxury-primary transition-colors font-medium">
            Services
          </Link>
          <Link to="/gallery" className="text-white hover:text-luxury-primary transition-colors font-medium">
            Gallery
          </Link>
          <Link to="/testimonials" className="text-white hover:text-luxury-primary transition-colors font-medium">
            Testimonials
          </Link>
          <Link to="/contact" className="text-white hover:text-luxury-primary transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button 
            className="bg-luxury-primary hover:bg-luxury-primary/90 text-black font-medium"
            asChild
          >
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-luxury-secondary/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-luxury-primary transition-colors font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/fleet" 
              className="text-white hover:text-luxury-primary transition-colors font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Fleet
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-luxury-primary transition-colors font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="text-white hover:text-luxury-primary transition-colors font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/testimonials" 
              className="text-white hover:text-luxury-primary transition-colors font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-luxury-primary transition-colors font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-luxury-primary hover:bg-luxury-primary/90 text-black font-medium w-full"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
