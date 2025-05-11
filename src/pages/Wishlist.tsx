
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const Wishlist = () => {
  // In a real app, this would come from wishlist context or state management
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const isEmpty = wishlistItems.length === 0;
  
  // Placeholder functions
  const removeFromWishlist = (id: string) => {
    // Implementation would update the wishlist state
    console.log(`Remove item ${id} from wishlist`);
  };
  
  const moveToCart = (id: string) => {
    // Implementation would move the item from wishlist to cart
    console.log(`Move item ${id} to cart`);
  };
  
  return (
    <PageLayout>
      <PageHeader 
        title="My Wishlist" 
        description="Your favorite items saved for later"
      />
      
      <div className="container mx-auto px-4 pb-12">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Heart className="h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">Save items you love for inspiration or future purchases.</p>
            <Link to="/products">
              <Button>Discover Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* This would map over actual wishlist items */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <img src="/placeholder.svg" alt="Product image" className="w-full h-full object-cover" />
                <button
                  onClick={() => removeFromWishlist("1")}
                  className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors"
                >
                  <Heart className="h-4 w-4 text-pink-400 fill-pink-400" />
                </button>
              </div>
              
              <div className="p-4">
                <Link to="/product/1" className="block">
                  <h3 className="font-medium text-gray-900 hover:text-pink-400 line-clamp-1">
                    Pink Pastel Summer Dress
                  </h3>
                </Link>
                
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">$49.99</span>
                  <div className="space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-500"
                      onClick={() => removeFromWishlist("1")}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => moveToCart("1")}
                    >
                      <ShoppingBag className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Wishlist;
