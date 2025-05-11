
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import OrderHistory from "./pages/OrderHistory";
import Returns from "./pages/Returns";
import CustomerService from "./pages/CustomerService";
import Contact from "./pages/Contact";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnsPolicy from "./pages/ReturnsPolicy";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/category/:category" element={<ProductList />} />
          <Route path="/sale" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/returns-policy" element={<ReturnsPolicy />} />
          <Route path="/faqs" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

