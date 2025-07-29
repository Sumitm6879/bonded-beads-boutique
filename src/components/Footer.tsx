import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Brand Name */}
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
            Bonded Beads
          </h3>
          
          {/* Instagram Link */}
          <a
            href="https://instagram.com/bonded_beadz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors duration-300 mb-6 group"
          >
            <Instagram size={24} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="font-montserrat font-semibold text-lg">@bonded_beadz</span>
          </a>
          
          {/* Decorative Separator */}
          <div className="flex items-center mb-6">
            <div className="w-16 h-px bg-primary/30"></div>
            <div className="mx-3 w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-16 h-px bg-primary/30"></div>
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground font-montserrat text-sm">
            © {new Date().getFullYear()} Bonded Beads. All rights reserved.
          </p>
          
          <p className="text-muted-foreground font-montserrat text-xs mt-2">
            Handmade with love, designed to connect hearts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;