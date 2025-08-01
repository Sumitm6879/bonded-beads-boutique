import { Card, CardContent } from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: 'Friendship Bracelet',
    price: '₹199.00',
    image: '/lovable-uploads/193bad5e-a9f9-4e91-9c05-b6a0771ffba8.png',
    description: 'Elegant teal and pink beaded bracelet with delicate charm details'
  },
  {
    id: 2,
    name: 'F1 maclaren keychain',
    price: '₹399.00',
    image: '/lovable-uploads/03b5c715-e464-43e4-adb1-1169b4be9ac7.png',
    description: 'Vibrant orange and black beaded design with personalized letter charms'
  },
  {
    id: 3,
    name: 'FlowerPearl Bracelet',
    price: '₹299.00',
    image: '/lovable-uploads/0fa900dd-3754-4ede-bbb2-67c7377d2d53.png',
    description: 'Sophisticated teal and white bracelet with natural stone accents'
  }
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our Bracelets
          </h2>
          <p className="text-lg font-montserrat text-muted-foreground max-w-2xl mx-auto">
            Each piece is carefully handcrafted with premium materials and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-montserrat text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-montserrat font-bold text-primary">
                    {product.price}
                  </span>
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full font-montserrat font-medium transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;