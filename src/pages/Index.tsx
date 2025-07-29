import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import About from '@/components/About';
import CustomOrders from '@/components/CustomOrders';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductGrid />
      <About />
      <CustomOrders />
      <Footer />
    </div>
  );
};

export default Index;
