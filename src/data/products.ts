
import { Product } from "@/types/product";

// Sample product data
export const products: Product[] = [
  {
    id: "1",
    name: "Pastel Pink Floral Maxi Dress",
    description: "A beautiful floral maxi dress in soft pastel pink, perfect for summer days and special occasions.",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03f?q=80&w=500",
      "https://images.unsplash.com/photo-1554194444-e8efa1f4b508?q=80&w=500"
    ],
    colors: ["pink", "blue", "cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Casual",
    tags: ["summer", "floral", "maxi"],
    rating: 4.5,
    reviewCount: 12,
    stock: 15,
    featured: true,
    newArrival: true
  },
  {
    id: "2",
    name: "Mint Green A-Line Dress",
    description: "An elegant A-line dress in refreshing mint green, suitable for both casual and semi-formal events.",
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    images: [
      "https://images.unsplash.com/photo-1566677914817-56426959ae9c?q=80&w=500",
      "https://images.unsplash.com/photo-1566677931881-0acc531340bc?q=80&w=500"
    ],
    colors: ["mint", "lavender", "ivory"],
    sizes: ["S", "M", "L", "XL"],
    category: "Casual",
    tags: ["summer", "a-line", "elegant"],
    rating: 4.2,
    reviewCount: 8,
    stock: 10,
    featured: true,
    newArrival: false
  },
  {
    id: "3",
    name: "Lavender Lace Evening Gown",
    description: "A stunning lace evening gown in soft lavender, designed to make you stand out at any formal event.",
    price: 149.99,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1464022634935-3b11f35c356b?q=80&w=500",
      "https://images.unsplash.com/photo-1464022654900-663c545bdf9c?q=80&w=500"
    ],
    colors: ["lavender", "navy", "black"],
    sizes: ["S", "M", "L"],
    category: "Formal",
    tags: ["evening", "lace", "gown"],
    rating: 4.9,
    reviewCount: 15,
    stock: 7,
    featured: false,
    newArrival: true
  },
  {
    id: "4",
    name: "Pastel Blue Cocktail Dress",
    description: "A chic cocktail dress in pastel blue, perfect for parties and social gatherings.",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1518018423442-ccb49d64de14?q=80&w=500",
      "https://images.unsplash.com/photo-1518018440994-00e8a414c5a4?q=80&w=500"
    ],
    colors: ["blue", "pink", "black"],
    sizes: ["XS", "S", "M", "L"],
    category: "Party",
    tags: ["cocktail", "party", "elegant"],
    rating: 4.3,
    reviewCount: 9,
    stock: 12,
    featured: true,
    newArrival: false
  },
  {
    id: "5",
    name: "Peach Summer Sundress",
    description: "A light and breezy sundress in a soft peach hue, ideal for hot summer days.",
    price: 59.99,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1568116307160-9b997355c593?q=80&w=500",
      "https://images.unsplash.com/photo-1568166460929-9c41a4af1ba1?q=80&w=500"
    ],
    colors: ["peach", "white", "yellow"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Casual",
    tags: ["summer", "sundress", "lightweight"],
    rating: 4.1,
    reviewCount: 6,
    stock: 20,
    featured: false,
    newArrival: true
  },
  {
    id: "6",
    name: "Blush Pink Bridesmaid Dress",
    description: "An elegant bridesmaid dress in soft blush pink, designed for comfort and style.",
    price: 119.99,
    originalPrice: 149.99,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1535531534189-31c56aecbb9b?q=80&w=500",
      "https://images.unsplash.com/photo-1537726306469-d8ec101a2873?q=80&w=500"
    ],
    colors: ["blush", "champagne", "sage"],
    sizes: ["S", "M", "L", "XL"],
    category: "Formal",
    tags: ["wedding", "bridesmaid", "formal"],
    rating: 4.7,
    reviewCount: 14,
    stock: 8,
    featured: true,
    newArrival: false
  },
  {
    id: "7",
    name: "Pastel Yellow Wrap Dress",
    description: "A flattering wrap dress in pastel yellow, versatile for both work and weekend events.",
    price: 69.99,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1572808301386-9fc8bff20222?q=80&w=500",
      "https://images.unsplash.com/photo-1575738182332-9a30622e3e10?q=80&w=500"
    ],
    colors: ["yellow", "mint", "coral"],
    sizes: ["XS", "S", "M", "L"],
    category: "Casual",
    tags: ["wrap", "work", "versatile"],
    rating: 4.4,
    reviewCount: 10,
    stock: 15,
    featured: false,
    newArrival: true
  },
  {
    id: "8",
    name: "Lilac Off-Shoulder Dress",
    description: "A romantic off-shoulder dress in delicate lilac, perfect for garden parties and special occasions.",
    price: 94.99,
    originalPrice: 129.99,
    discount: 27,
    images: [
      "https://images.unsplash.com/photo-1578021238055-d4ed4fea050f?q=80&w=500",
      "https://images.unsplash.com/photo-1594270410221-e6a57f8e2071?q=80&w=500"
    ],
    colors: ["lilac", "white", "rose"],
    sizes: ["S", "M", "L"],
    category: "Party",
    tags: ["off-shoulder", "romantic", "special occasion"],
    rating: 4.6,
    reviewCount: 11,
    stock: 9,
    featured: true,
    newArrival: false
  }
];

// Filtered collections
export const featuredProducts = products.filter(product => product.featured);
export const newArrivals = products.filter(product => product.newArrival);

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

// Helper function for searching products
export const searchProducts = (query: string): Product[] => {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerCaseQuery) || 
    product.description.toLowerCase().includes(lowerCaseQuery) || 
    product.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
};
