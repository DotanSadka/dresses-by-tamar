
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const Cart = () => {
  // In a real app, this would come from cart context or state management
  const [cartItems, setCartItems] = useState<any[]>([]);
  const isEmpty = cartItems.length === 0;
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 4.99;
  const total = subtotal + shipping;

  // Placeholder functions
  const updateQuantity = (id: string, newQuantity: number) => {
    // Implementation would update the cart state
    console.log(`Update quantity for ${id} to ${newQuantity}`);
  };
  
  const removeItem = (id: string) => {
    // Implementation would update the cart state
    console.log(`Remove item ${id}`);
  };
  
  return (
    <PageLayout>
      <PageHeader 
        title="Shopping Cart" 
        description="Review the items in your cart before checkout"
      />
      
      <div className="container mx-auto px-4 pb-12">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-lg font-medium mb-4">Cart Items</h2>
                
                <div className="divide-y">
                  {/* This would map over actual cart items */}
                  <div className="flex py-6 space-x-4">
                    <div className="w-24 h-32 bg-gray-100 rounded overflow-hidden">
                      <img src="/placeholder.svg" alt="Product image" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-base font-medium text-gray-900">
                          <Link to="/product/1" className="hover:text-pink-400">Pink Pastel Summer Dress</Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Size: M</p>
                        <p className="mt-1 text-sm text-gray-500">Color: Pink</p>
                      </div>
                      
                      <div className="flex items-end justify-between">
                        <div className="flex items-center border rounded">
                          <button 
                            className="px-2 py-1 text-gray-600 hover:text-pink-400"
                            onClick={() => updateQuantity("1", 0)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-2 py-1">1</span>
                          <button 
                            className="px-2 py-1 text-gray-600 hover:text-pink-400"
                            onClick={() => updateQuantity("1", 2)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-gray-900 font-medium">$49.99</span>
                          <button 
                            className="ml-4 text-gray-400 hover:text-red-500"
                            onClick={() => removeItem("1")}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium mb-4">Have a promo code?</h2>
                <div className="flex max-w-md">
                  <Input placeholder="Enter promo code" className="mr-2 flex-grow" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>${subtotal.toFixed(2)}</dd>
                  </div>
                  
                  <div className="flex justify-between">
                    <dt>Shipping</dt>
                    <dd>${shipping.toFixed(2)}</dd>
                  </div>
                  
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <dt>Total</dt>
                      <dd>${total.toFixed(2)}</dd>
                    </div>
                  </div>
                </dl>
                
                <Button className="w-full mt-6">Proceed to Checkout</Button>
                
                <div className="mt-6 text-center">
                  <Link 
                    to="/products"
                    className="text-sm text-gray-600 hover:text-pink-400"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Cart;
