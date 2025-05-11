
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  featured: boolean;
  newArrival: boolean;
}
