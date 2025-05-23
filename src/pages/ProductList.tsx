
import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Filter, Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { products, getProductsByCategory, searchProducts, onSaleProducts } from "@/data/products";

const ProductList = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const filter = searchParams.get("filter");
  
  const isMobile = useIsMobile();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  const [searchQuery, setSearchQuery] = useState(query || "");
  
  // Extract all unique sizes and colors from products
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes)));
  const allColors = Array.from(new Set(products.flatMap(p => p.colors)));
  
  // Initial filtering based on route parameters
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category if provided
    if (category && category !== "all") {
      filtered = getProductsByCategory(category);
    }
    
    // Filter by special collections
    if (filter === "sale") {
      filtered = filtered.filter(p => p.onSale);
    } else if (filter === "new") {
      filtered = filtered.filter(p => p.newArrival);
    }
    
    // Filter by search query if provided
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      filtered = filtered.filter(
        p => p.name.toLowerCase().includes(lowercaseQuery) ||
             p.description.toLowerCase().includes(lowercaseQuery) ||
             p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
    }
    
    setFilteredProducts(filtered);
  }, [category, query, filter]);
  
  // Apply filters
  const applyFilters = () => {
    let filtered = [...products];
    
    // Category filter
    if (category && category !== "all") {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    
    // Special collections filter
    if (filter === "sale") {
      filtered = filtered.filter(p => p.onSale);
    } else if (filter === "new") {
      filtered = filtered.filter(p => p.newArrival);
    }
    
    // Search query filter
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      filtered = filtered.filter(
        p => p.name.toLowerCase().includes(lowercaseQuery) ||
             p.description.toLowerCase().includes(lowercaseQuery) ||
             p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
    }
    
    // Price range filter
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    
    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p => 
        p.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors.some(color => selectedColors.includes(color))
      );
    }
    
    // Sorting
    switch(sortOption) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered = filtered.filter(p => p.newArrival).concat(
          filtered.filter(p => !p.newArrival)
        );
        break;
      case "featured":
      default:
        filtered = filtered.filter(p => p.featured).concat(
          filtered.filter(p => !p.featured)
        );
        break;
    }
    
    setFilteredProducts(filtered);
  };
  
  // Toggle size selection
  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };
  
  // Toggle color selection
  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };
  
  // Apply filters whenever filter options change
  useEffect(() => {
    applyFilters();
  }, [priceRange, selectedSizes, selectedColors, sortOption]);
  
  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  
  // Filter component for both desktop sidebar and mobile dialog
  const FilterComponent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
        <Slider
          defaultValue={[0, 200]}
          max={200}
          step={1}
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Size</h3>
        <div className="grid grid-cols-2 gap-2">
          {allSizes.map((size) => (
            <div key={size} className="flex items-center">
              <Checkbox
                id={`size-${size}`}
                checked={selectedSizes.includes(size)}
                onCheckedChange={() => toggleSize(size)}
              />
              <Label htmlFor={`size-${size}`} className="ml-2">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Color</h3>
        <div className="flex flex-wrap gap-2">
          {allColors.map((color) => (
            <button
              key={color}
              onClick={() => toggleColor(color)}
              className={`
                w-8 h-8 rounded-full border
                ${selectedColors.includes(color) ? 'ring-2 ring-pink-400 ring-offset-2' : ''}
              `}
              style={{ backgroundColor: color }}
              aria-label={color}
            />
          ))}
        </div>
      </div>
      
      {isMobile && (
        <Button 
          className="w-full bg-pink-400 hover:bg-pink-500"
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
      )}
    </div>
  );
  
  const getTitle = () => {
    if (filter === "sale") return "Sale Items";
    if (filter === "new") return "New Arrivals";
    if (category) return `${category.charAt(0).toUpperCase() + category.slice(1)} Dresses`;
    return "All Dresses";
  };
  
  return (
    <PageLayout>
      <PageHeader 
        title={getTitle()}
        description={query ? `Search results for: "${query}"` : "Find your perfect style"}
      />
      
      <div className="container mx-auto px-4 pb-8">
        {/* Top bar with search, sort and filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          {/* Search bar */}
          <form onSubmit={handleSearch} className="w-full md:w-auto flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dresses..."
              className="border border-r-0 border-gray-300 rounded-l-md py-2 px-4 w-full md:w-64"
            />
            <Button type="submit" variant="default" className="rounded-l-none">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          
          <div className="flex gap-4 items-center self-end">
            {/* Sort dropdown */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md text-sm py-1.5 px-3"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            
            {/* Filter button (mobile only) */}
            {isMobile && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
                  <FilterComponent />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter sidebar (desktop only) */}
          {!isMobile && (
            <div className="w-64 shrink-0">
              <div className="sticky top-20 bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <FilterComponent />
              </div>
            </div>
          )}
          
          {/* Product grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700">No products found</h3>
                <p className="text-gray-500 mt-2">Try changing your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductList;
