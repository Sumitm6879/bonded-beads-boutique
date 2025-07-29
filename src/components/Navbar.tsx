import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-foreground">
              Bonded Beads
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-montserrat"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('custom-orders')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-montserrat"
            >
              Custom Orders
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-montserrat"
            >
              About
            </button>
          </div>

          {/* Instagram Icon */}
          <div className="flex items-center">
            <a
              href="https://instagram.com/bonded_beadz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300 p-2"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;