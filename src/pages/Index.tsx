
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ShoppingBag, Heart, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ProductCard from "@/components/ProductCard";
import { featuredProducts, newArrivals } from "@/data/products";

const Index = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1610288311735-39b7facbd095?q=80&w=1200",
      title: "Spring Collection",
      subtitle: "Pastel dreams for the new season",
      buttonText: "Shop Now",
      link: "/category/casual"
    },
    {
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1200",
      title: "Summer Essentials",
      subtitle: "Light fabrics for warm days",
      buttonText: "Explore",
      link: "/products"
    },
    {
      image: "https://images.unsplash.com/photo-1604177091072-2f8da175ce9f?q=80&w=1200",
      title: "Elegant Evenings",
      subtitle: "Perfect for special occasions",
      buttonText: "Discover",
      link: "/category/formal"
    }
  ];
  
  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 10000); // Change slide every 10 seconds
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <PageLayout>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={heroSlides[heroIndex].image} 
              alt="Hero Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100/70 to-purple-100/50"></div>
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-md">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 text-gray-800 animate-fade-in">
                {heroSlides[heroIndex].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 animate-fade-in">
                {heroSlides[heroIndex].subtitle}
              </p>
              <Link to={heroSlides[heroIndex].link}>
                <Button size="lg" className="bg-pink-400 hover:bg-pink-500 animate-fade-in">
                  {heroSlides[heroIndex].buttonText}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setHeroIndex(index)}
                className={`w-3 h-3 rounded-full ${heroIndex === index ? 'bg-pink-400' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12 md:py-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {name: 'Casual', image: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=600"},
              {name: 'Formal', image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600"},
              {name: 'Party', image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600"}
            ].map((category) => (
              <Link to={`/category/${category.name.toLowerCase()}`} key={category.name} className="group">
                <div className="relative h-60 md:h-80 rounded-lg overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Shop now <ChevronRight className="ml-2 h-4 w-4" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* New Arrivals */}
        <section className="py-12 md:py-20 bg-purple-50/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
              <Link to="/products?filter=new" className="text-pink-400 hover:text-pink-500 flex items-center">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newArrivals.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-12 md:py-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Featured Collection</h2>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.slice(0, 8).map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex mt-8 justify-end gap-2">
              <CarouselPrevious className="static translate-y-0 ml-auto" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </section>
        
        {/* Newsletter */}
        <section className="py-12 md:py-20 bg-pink-100/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Join Our Newsletter</h2>
            <p className="text-lg mb-8 text-gray-600 max-w-md mx-auto">
              Subscribe to receive updates on new arrivals and special promotions
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-200"
              />
              <Button className="bg-pink-400 hover:bg-pink-500">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Index;
