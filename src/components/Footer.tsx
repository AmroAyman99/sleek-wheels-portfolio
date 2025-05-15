
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 gold-text">LIMO MO</h3>
            <p className="text-gray-300 mb-4">
              Premium car service providing luxury transportation for any occasion. Your comfort and satisfaction are our top priorities.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://web.facebook.com/tota.speed" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-primary hover:text-black transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 gold-text">Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-luxury-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-300 hover:text-luxury-primary transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-luxury-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-luxury-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-luxury-primary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-luxury-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 gold-text">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-luxury-primary mr-3 mt-1" />
                <span className="text-gray-300">Washington, DC, United States</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-luxury-primary mr-3" />
                <span className="text-gray-300">(202) 469-9763</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-luxury-primary mr-3" />
                <span className="text-gray-300">mohamed_hassan10010@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} LIMO MO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
