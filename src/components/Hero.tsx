import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-banner.jpg';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
          Handmade with{' '}
          <span className="text-primary">Love</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-montserrat text-foreground/90 mb-8 leading-relaxed">
          Beautiful bracelets crafted with care, designed to tell your unique story
        </p>
        
        <Button
          onClick={scrollToProducts}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Shop Now
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;