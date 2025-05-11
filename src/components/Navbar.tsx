
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search, ShoppingBag, User, Heart, Menu } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const categories = [
    { name: "New", path: "/category/new" },
    { name: "Casual", path: "/category/casual" },
    { name: "Formal", path: "/category/formal" },
    { name: "Party", path: "/category/party" },
    { name: "Sale", path: "/category/sale" },
  ];
  
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl md:text-2xl text-gray-800">
            PastelDress
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to={category.path}
                className="text-gray-600 hover:text-pink-400 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
              className="text-gray-600 hover:text-pink-400"
            >
              <Search className="h-5 w-5" />
            </button>
            
            {/* Wishlist */}
            <Link to="/wishlist" className="text-gray-600 hover:text-pink-400 hidden md:block">
              <Heart className="h-5 w-5" />
            </Link>
            
            {/* User Account */}
            <Link to="/account" className="text-gray-600 hover:text-pink-400 hidden md:block">
              <User className="h-5 w-5" />
            </Link>
            
            {/* Cart */}
            <Link to="/cart" className="text-gray-600 hover:text-pink-400 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            
            {/* Mobile Menu */}
            {isMobile && (
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="text-gray-600">
                    <Menu className="h-5 w-5" />
                  </button>
                </DrawerTrigger>
                <DrawerContent className="h-[80vh]">
                  <div className="px-4 py-8 space-y-6">
                    <nav className="flex flex-col space-y-4">
                      {categories.map((category) => (
                        <Link 
                          key={category.name} 
                          to={category.path}
                          className="text-gray-600 hover:text-pink-400 text-lg py-2"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </nav>
                    
                    <div className="flex flex-col space-y-4 mt-6">
                      <Link to="/wishlist" className="flex items-center text-gray-600 py-2">
                        <Heart className="h-5 w-5 mr-3" />
                        Wishlist
                      </Link>
                      <Link to="/account" className="flex items-center text-gray-600 py-2">
                        <User className="h-5 w-5 mr-3" />
                        Account
                      </Link>
                    </div>
                    
                    <DrawerClose asChild>
                      <Button className="w-full bg-pink-400 hover:bg-pink-500">
                        Close
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerContent>
              </Drawer>
            )}
          </div>
        </div>
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-gray-100">
            <div className="flex items-center">
              <Input
                placeholder="Search for products..."
                className="flex-grow"
                autoFocus
              />
              <Button 
                onClick={() => setIsSearchOpen(false)}
                variant="ghost"
                className="ml-2"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
