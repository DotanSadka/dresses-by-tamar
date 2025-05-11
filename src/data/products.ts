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
      "https://images.unsplash.com/photo-1554194444-e8efa1f4b508?q=80&w=500",
      "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=500"
    ],
    colors: ["pink", "blue", "cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Casual",
    tags: ["summer", "floral", "maxi", "sale"],
    rating: 4.5,
    reviewCount: 12,
    stock: 15,
    featured: true,
    newArrival: true,
    onSale: true
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
      "https://images.unsplash.com/photo-1566677931881-0acc531340bc?q=80&w=500",
      "https://images.unsplash.com/photo-1594270410221-e6a57f8e2071?q=80&w=500"
    ],
    colors: ["mint", "lavender", "ivory"],
    sizes: ["S", "M", "L", "XL"],
    category: "Casual",
    tags: ["summer", "a-line", "elegant", "sale"],
    rating: 4.2,
    reviewCount: 8,
    stock: 10,
    featured: true,
    newArrival: false,
    onSale: true
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
      "https://images.unsplash.com/photo-1464022654900-663c545bdf9c?q=80&w=500",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=500"
    ],
    colors: ["lavender", "navy", "black"],
    sizes: ["S", "M", "L"],
    category: "Formal",
    tags: ["evening", "lace", "gown"],
    rating: 4.9,
    reviewCount: 15,
    stock: 7,
    featured: false,
    newArrival: true,
    onSale: false
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
      "https://images.unsplash.com/photo-1518018440994-00e8a414c5a4?q=80&w=500",
      "https://images.unsplash.com/photo-1607370658475-e08bff641ee6?q=80&w=500"
    ],
    colors: ["blue", "pink", "black"],
    sizes: ["XS", "S", "M", "L"],
    category: "Party",
    tags: ["cocktail", "party", "elegant", "sale"],
    rating: 4.3,
    reviewCount: 9,
    stock: 12,
    featured: true,
    newArrival: false,
    onSale: true
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
      "https://images.unsplash.com/photo-1568166460929-9c41a4af1ba1?q=80&w=500",
      "https://images.unsplash.com/photo-1583849215140-f75f5e933568?q=80&w=500"
    ],
    colors: ["peach", "white", "yellow"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Casual",
    tags: ["summer", "sundress", "lightweight"],
    rating: 4.1,
    reviewCount: 6,
    stock: 20,
    featured: false,
    newArrival: true,
    onSale: false
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
      "https://images.unsplash.com/photo-1537726306469-d8ec101a2873?q=80&w=500",
      "https://images.unsplash.com/photo-1613738622259-33fc049d2af3?q=80&w=500"
    ],
    colors: ["blush", "champagne", "sage"],
    sizes: ["S", "M", "L", "XL"],
    category: "Formal",
    tags: ["wedding", "bridesmaid", "formal", "sale"],
    rating: 4.7,
    reviewCount: 14,
    stock: 8,
    featured: true,
    newArrival: false,
    onSale: true
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
      "https://images.unsplash.com/photo-1575738182332-9a30622e3e10?q=80&w=500",
      "https://images.unsplash.com/photo-1579460513989-7efda76853ab?q=80&w=500"
    ],
    colors: ["yellow", "mint", "coral"],
    sizes: ["XS", "S", "M", "L"],
    category: "Casual",
    tags: ["wrap", "work", "versatile"],
    rating: 4.4,
    reviewCount: 10,
    stock: 15,
    featured: false,
    newArrival: true,
    onSale: false
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
      "https://images.unsplash.com/photo-1594270410221-e6a57f8e2071?q=80&w=500",
      "https://images.unsplash.com/photo-1587147394286-1decdf2274a4?q=80&w=500"
    ],
    colors: ["lilac", "white", "rose"],
    sizes: ["S", "M", "L"],
    category: "Party",
    tags: ["off-shoulder", "romantic", "special occasion", "sale"],
    rating: 4.6,
    reviewCount: 11,
    stock: 9,
    featured: true,
    newArrival: false,
    onSale: true
  },
  {
    id: "9",
    name: "Seafoam Green Cocktail Dress",
    description: "An exquisite cocktail dress in seafoam green with delicate beading, perfect for evening events.",
    price: 109.99,
    originalPrice: 139.99,
    discount: 21,
    images: [
      "https://images.unsplash.com/photo-1613591723532-96cc22fb0e34?q=80&w=500",
      "https://images.unsplash.com/photo-1613591726478-f4b8c2d30d43?q=80&w=500",
      "https://images.unsplash.com/photo-1613591726347-b1b83382c93b?q=80&w=500"
    ],
    colors: ["seafoam", "silver", "blue"],
    sizes: ["XS", "S", "M", "L"],
    category: "Party",
    tags: ["cocktail", "beaded", "evening", "sale"],
    rating: 4.5,
    reviewCount: 8,
    stock: 6,
    featured: false,
    newArrival: true,
    onSale: true
  },
  {
    id: "10",
    name: "Ivory Lace Wedding Gown",
    description: "A breathtaking ivory lace wedding gown with a cathedral train, designed to make your special day unforgettable.",
    price: 699.99,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1567531153532-c2a288f9a0a1?q=80&w=500",
      "https://images.unsplash.com/photo-1566003833094-c300c9ec98f7?q=80&w=500",
      "https://images.unsplash.com/photo-1595711957428-5a43e8be76ba?q=80&w=500"
    ],
    colors: ["ivory", "white", "cream"],
    sizes: ["S", "M", "L", "XL"],
    category: "Formal",
    tags: ["wedding", "bridal", "lace", "luxury"],
    rating: 5.0,
    reviewCount: 18,
    stock: 5,
    featured: true,
    newArrival: true,
    onSale: false
  },
  {
    id: "11",
    name: "Rose Quartz Slip Dress",
    description: "A silky slip dress in rose quartz, offering effortless elegance for dinner dates and evening outings.",
    price: 65.99,
    originalPrice: 89.99,
    discount: 27,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=500",
      "https://images.unsplash.com/photo-1583100335236-d35c2d980f2a?q=80&w=500",
      "https://images.unsplash.com/photo-1607189760246-25ae07fe5722?q=80&w=500"
    ],
    colors: ["rose", "champagne", "navy"],
    sizes: ["XS", "S", "M", "L"],
    category: "Party",
    tags: ["slip", "silky", "evening", "sale"],
    rating: 4.3,
    reviewCount: 7,
    stock: 11,
    featured: false,
    newArrival: true,
    onSale: true
  },
  {
    id: "12",
    name: "Sage Green Midi Dress",
    description: "A relaxed midi dress in sage green, featuring pockets and a tie waist for casual everyday style.",
    price: 54.99,
    originalPrice: 64.99,
    discount: 15,
    images: [
      "https://images.unsplash.com/photo-1564926072909-a99138b2d2ac?q=80&w=500",
      "https://images.unsplash.com/photo-1564926107285-2ad4b901c08a?q=80&w=500",
      "https://images.unsplash.com/photo-1568252775576-0864735bb63f?q=80&w=500"
    ],
    colors: ["sage", "terracotta", "navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Casual",
    tags: ["midi", "pockets", "everyday", "sale"],
    rating: 4.2,
    reviewCount: 14,
    stock: 20,
    featured: false,
    newArrival: false,
    onSale: true
  },
  {
    id: "13",
    name: "Coral Ruffled Sundress",
    description: "A playful sundress in vibrant coral with ruffle details, perfect for beach vacations and summer parties.",
    price: 74.99,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1510018572596-e40e2619b412?q=80&w=500",
      "https://images.unsplash.com/photo-1509631179476-8bef08e300be?q=80&w=500",
      "https://images.unsplash.com/photo-1605902711834-31e631331472?q=80&w=500"
    ],
    colors: ["coral", "turquoise", "yellow"],
    sizes: ["XS", "S", "M", "L"],
    category: "Casual",
    tags: ["sundress", "ruffles", "summer", "beach"],
    rating: 4.4,
    reviewCount: 9,
    stock: 16,
    featured: true,
    newArrival: true,
    onSale: false
  },
  {
    id: "14",
    name: "Navy Blue Sequin Gown",
    description: "A glamorous navy blue gown with sequin embellishments, designed to dazzle at formal events and galas.",
    price: 189.99,
    originalPrice: 249.99,
    discount: 24,
    images: [
      "https://images.unsplash.com/photo-1623500409300-3281e7323496?q=80&w=500",
      "https://images.unsplash.com/photo-1623500401840-acf8e833dc6e?q=80&w=500",
      "https://images.unsplash.com/photo-1623500401806-a382fdef8f60?q=80&w=500"
    ],
    colors: ["navy", "black", "burgundy"],
    sizes: ["S", "M", "L", "XL"],
    category: "Formal",
    tags: ["sequin", "gala", "evening", "sale"],
    rating: 4.9,
    reviewCount: 16,
    stock: 8,
    featured: true,
    newArrival: false,
    onSale: true
  },
  {
    id: "15",
    name: "Lilac Tiered Maxi Dress",
    description: "A flowing tiered maxi dress in soft lilac, offering effortless bohemian style for summer occasions.",
    price: 79.99,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=500",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0517?q=80&w=500",
      "https://images.unsplash.com/photo-1618128257881-9aa4014fe613?q=80&w=500"
    ],
    colors: ["lilac", "dusty rose", "cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Casual",
    tags: ["maxi", "tiered", "boho", "summer"],
    rating: 4.6,
    reviewCount: 13,
    stock: 14,
    featured: true,
    newArrival: true,
    onSale: false
  },
  {
    id: "16",
    name: "Emerald Green Velvet Dress",
    description: "A luxurious velvet dress in rich emerald green, perfect for holiday parties and winter events.",
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    images: [
      "https://images.unsplash.com/photo-1577538928305-3807c3993047?q=80&w=500",
      "https://images.unsplash.com/photo-1587843618590-c22d067f9cf9?q=80&w=500",
      "https://images.unsplash.com/photo-1518828416183-d40441d36d9c?q=80&w=500"
    ],
    colors: ["emerald", "burgundy", "navy"],
    sizes: ["S", "M", "L", "XL"],
    category: "Party",
    tags: ["velvet", "holiday", "winter", "sale"],
    rating: 4.7,
    reviewCount: 12,
    stock: 10,
    featured: false,
    newArrival: false,
    onSale: true
  },
  {
    id: "17",
    name: "Champagne Satin Slip Dress",
    description: "An elegant satin slip dress in champagne, featuring a cowl neck and adjustable straps for the perfect fit.",
    price: 85.99,
    originalPrice: 105.99,
    discount: 19,
    images: [
      "https://images.unsplash.com/photo-1614183374538-8112e4f553ff?q=80&w=500",
      "https://images.unsplash.com/photo-1600102598329-a822a9f655c9?q=80&w=500",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=500"
    ],
    colors: ["champagne", "silver", "black"],
    sizes: ["XS", "S", "M", "L"],
    category: "Party",
    tags: ["satin", "cowl neck", "elegant", "sale"],
    rating: 4.5,
    reviewCount: 10,
    stock: 12,
    featured: true,
    newArrival: false,
    onSale: true
  },
  {
    id: "18",
    name: "Dusty Blue Chiffon Gown",
    description: "A flowing chiffon gown in dusty blue with a delicate beaded bodice, ideal for formal events and proms.",
    price: 159.99,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1572689161921-ee4a81cc3644?q=80&w=500",
      "https://images.unsplash.com/photo-1595931960539-e47d98e52c29?q=80&w=500",
      "https://images.unsplash.com/photo-1535578195295-41566d9abcf3?q=80&w=500"
    ],
    colors: ["dusty blue", "sage", "blush"],
    sizes: ["S", "M", "L", "XL"],
    category: "Formal",
    tags: ["chiffon", "beaded", "prom", "formal"],
    rating: 4.8,
    reviewCount: 17,
    stock: 9,
    featured: true,
    newArrival: true,
    onSale: false
  },
  {
    id: "19",
    name: "Terracotta Linen Midi Dress",
    description: "A relaxed linen midi dress in terracotta, featuring button details and side pockets for casual summer style.",
    price: 69.99,
    originalPrice: 84.99,
    discount: 18,
    images: [
      "https://images.unsplash.com/photo-1558151507-c1aa3d917eed?q=80&w=500",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=500",
      "https://images.unsplash.com/photo-1509631179476-8bef08e300be?q=80&w=500"
    ],
    colors: ["terracotta", "olive", "sand"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Casual",
    tags: ["linen", "midi", "summer", "sale"],
    rating: 4.3,
    reviewCount: 11,
    stock: 18,
    featured: false,
    newArrival: false,
    onSale: true
  },
  {
    id: "20",
    name: "Gold Sequin Cocktail Dress",
    description: "A dazzling gold sequin cocktail dress with a flattering silhouette, perfect for New Year's parties and celebrations.",
    price: 129.99,
    originalPrice: 169.99,
    discount: 24,
    images: [
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=500",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=500",
      "https://images.unsplash.com/photo-1622460457267-9be8c80687cf?q=80&w=500"
    ],
    colors: ["gold", "silver", "rose gold"],
    sizes: ["XS", "S", "M", "L"],
    category: "Party",
    tags: ["sequin", "cocktail", "celebration", "sale"],
    rating: 4.7,
    reviewCount: 15,
    stock: 7,
    featured: true,
    newArrival: false,
    onSale: true
  }
];

// Filtered collections
export const featuredProducts = products.filter(product => product.featured);
export const newArrivals = products.filter(product => product.newArrival);
export const onSaleProducts = products.filter(product => product.onSale);

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
