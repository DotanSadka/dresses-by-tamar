
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, ChevronRight } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, featuredProducts } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-pink-400 hover:bg-pink-500">
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    
    // TODO: Add to cart logic
    toast.success("Added to your cart!");
  };
  
  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from your wishlist" : "Added to your wishlist");
    // TODO: Toggle wishlist logic
  };
  
  const relatedProducts = featuredProducts.filter(p => p.id !== product.id).slice(0, 4);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-pink-400">Home</Link>
            </li>
            <li className="mx-2">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-pink-400">
                {product.category}
              </Link>
            </li>
            <li className="mx-2">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="text-gray-800 font-medium truncate">
              {product.name}
            </li>
          </ol>
        </nav>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden mb-4 aspect-square">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border rounded-md overflow-hidden ${
                    selectedImage === index ? 'border-pink-400' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.name}-${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            
            {/* Price */}
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="ml-3 text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
              {product.discount > 0 && (
                <span className="ml-3 text-sm bg-pink-100 text-pink-600 font-medium px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount} {product.reviewCount === 1 ? 'review' : 'reviews'})
              </span>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`
                      w-10 h-10 rounded-full border
                      ${selectedColor === color ? 'ring-2 ring-pink-400 ring-offset-2' : ''}
                    `}
                    style={{ backgroundColor: color }}
                    aria-label={color}
                  />
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm text-gray-500 mt-2 capitalize">{selectedColor}</p>
              )}
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">Size</h3>
                <button className="text-sm text-pink-400 hover:text-pink-500">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-3 py-1 border rounded-md text-sm
                      ${selectedSize === size 
                        ? 'border-pink-400 bg-pink-50 text-pink-600' 
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-2 border border-gray-300 rounded-l-md"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <div className="px-4 py-2 border-t border-b border-gray-300 w-16 text-center">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  className="px-3 py-2 border border-gray-300 rounded-r-md"
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
                <p className="ml-4 text-sm text-gray-500">
                  {product.stock} items available
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAddToCart}
                className="flex-grow bg-pink-400 hover:bg-pink-500 text-white"
                size="lg"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <Button
                onClick={handleToggleWishlist}
                variant="outline"
                className={`
                  flex-grow border-pink-200
                  ${isWishlisted ? 'bg-pink-50 text-pink-600' : 'text-gray-600'}
                `}
                size="lg"
              >
                <Heart className={`mr-2 h-5 w-5 ${isWishlisted ? 'fill-pink-400' : ''}`} />
                {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">You May Also Like</h2>
            <Link to="/products" className="text-pink-400 hover:text-pink-500 flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
