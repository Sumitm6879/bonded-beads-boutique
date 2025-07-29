const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8">
            Bonded with Love
          </h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl font-montserrat text-muted-foreground leading-relaxed mb-6">
              At Bonded Beads, every bracelet tells a story. Founded with a passion for creating 
              meaningful connections through handcrafted jewelry, we believe that the perfect 
              accessory should reflect your unique personality and style.
            </p>
            
            <p className="text-lg md:text-xl font-montserrat text-muted-foreground leading-relaxed mb-6">
              Each piece is carefully designed and meticulously crafted using premium materials, 
              from genuine gemstones to high-quality beads. Our commitment to quality ensures 
              that every bracelet not only looks beautiful but also stands the test of time.
            </p>
            
            <p className="text-lg md:text-xl font-montserrat text-muted-foreground leading-relaxed">
              Whether you're treating yourself or finding the perfect gift for someone special, 
              our bracelets are designed to create lasting bonds and cherished memories. 
              Because the best accessories aren't just worn—they're felt.
            </p>
          </div>
          
          <div className="mt-12 flex items-center justify-center">
            <div className="w-24 h-px bg-primary/30"></div>
            <div className="mx-4 w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-24 h-px bg-primary/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;