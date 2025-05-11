
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    // TODO: Add to wishlist logic
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img 
            src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          
          {product.discount > 0 && (
            <span className="absolute top-2 left-2 bg-pink-400 text-white text-xs font-medium px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}

          {product.newArrival && !product.discount && (
            <span className="absolute top-2 left-2 bg-purple-400 text-white text-xs font-medium px-2 py-1 rounded">
              NEW
            </span>
          )}
          
          <button
            onClick={handleWishlist}
            className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1.5 rounded-full transition-colors"
          >
            <Heart
              className={`h-4 w-4 ${isWishlisted ? 'fill-pink-400 text-pink-400' : 'text-gray-600'}`}
            />
          </button>
        </div>
        
        <div className="p-3">
          <h3 className="text-sm font-medium text-gray-700 line-clamp-1 group-hover:text-pink-400 transition-colors">
            {product.name}
          </h3>
          
          <div className="mt-1 flex items-center">
            <span className="text-sm font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            
            {product.originalPrice && (
              <span className="ml-2 text-xs text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="mt-1 flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
