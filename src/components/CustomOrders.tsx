import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle } from 'lucide-react';

const CustomOrders = () => {
  return (
    <section id="custom-orders" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8">
            Have an Idea? We Create{' '}
            <span className="text-primary">Custom Designs</span>
          </h2>
          
          <p className="text-lg md:text-xl font-montserrat text-muted-foreground leading-relaxed mb-8">
            Bring your vision to life with our custom bracelet design service. Whether it's 
            specific colors, meaningful charms, or a completely unique style, we work with 
            you to create something truly special.
          </p>
          
          <div className="bg-card/50 rounded-2xl p-8 mb-8 border border-border/50">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="text-primary mr-3" size={32} />
              <h3 className="text-2xl font-playfair font-semibold text-foreground">
                How It Works
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-montserrat font-bold text-xl">1</span>
                </div>
                <h4 className="font-montserrat font-semibold text-foreground mb-2">Share Your Vision</h4>
                <p className="text-muted-foreground text-sm">DM us on Instagram with your ideas, inspiration, or design preferences</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-montserrat font-bold text-xl">2</span>
                </div>
                <h4 className="font-montserrat font-semibold text-foreground mb-2">Design Together</h4>
                <p className="text-muted-foreground text-sm">We'll collaborate on materials, colors, and details to perfect your design</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-montserrat font-bold text-xl">3</span>
                </div>
                <h4 className="font-montserrat font-semibold text-foreground mb-2">Handcrafted</h4>
                <p className="text-muted-foreground text-sm">Your unique bracelet is carefully handmade with love and attention to detail</p>
              </div>
            </div>
          </div>
          
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 font-montserrat font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <a
              href="https://instagram.com/bonded_beadz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Instagram size={24} />
              Message Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrders;