
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Truck, Globe } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const ShippingPolicy = () => {
  const shippingMethods = [
    {
      name: "Standard Shipping",
      time: "3-5 business days",
      cost: "$4.99",
      details: "For orders under $75"
    },
    {
      name: "Free Standard Shipping",
      time: "3-5 business days",
      cost: "FREE",
      details: "For orders over $75"
    },
    {
      name: "Express Shipping",
      time: "1-2 business days",
      cost: "$12.99",
      details: "Available for all orders"
    },
    {
      name: "International Shipping",
      time: "7-14 business days",
      cost: "From $19.99",
      details: "Available for select countries"
    }
  ];
  
  return (
    <PageLayout>
      <PageHeader 
        title="Shipping Policy" 
        description="Information about our shipping methods, timeframes, and costs"
      />
      
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Shipping Methods</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {shippingMethods.map((method, index) => (
                <Card key={index} className="border border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-purple-50 p-3 rounded-full mr-4 text-purple-600 flex-shrink-0">
                        {index === 0 || index === 1 ? (
                          <Truck className="h-6 w-6" />
                        ) : index === 2 ? (
                          <Clock className="h-6 w-6" />
                        ) : (
                          <Globe className="h-6 w-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{method.name}</h3>
                        <p className="text-gray-600">Delivery: {method.time}</p>
                        <p className="text-gray-600">Cost: <span className="font-medium">{method.cost}</span></p>
                        <p className="text-gray-500 text-sm mt-1">{method.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800">General Shipping Information</h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                At PastelDress, we strive to deliver your orders quickly and efficiently. Please review our shipping policies below.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    Orders are processed within 1-2 business days from the time of purchase.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    Shipping times are estimated and begin from the date the order is shipped, not when it is placed.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    You will receive a shipping confirmation email with tracking information once your order has been shipped.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    We ship from our warehouse located in New York, USA.
                  </p>
                </li>
              </ul>
            </div>
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I track my order?</AccordionTrigger>
                <AccordionContent>
                  Once your order ships, you will receive a shipping confirmation email with tracking information. You can also check the status of your order by logging into your account and viewing your order history.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to many countries worldwide. International shipping rates and delivery times vary depending on the destination. Please note that customers are responsible for any customs duties, taxes, or fees that may be imposed by their country's customs authorities.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I change my shipping address after placing an order?</AccordionTrigger>
                <AccordionContent>
                  We can only change the shipping address if the order has not been processed yet. Please contact our customer service team as soon as possible if you need to update your shipping address.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if my package is lost or damaged?</AccordionTrigger>
                <AccordionContent>
                  If your package is lost or damaged during transit, please contact our customer service team within 7 days of the expected delivery date. We will work with the shipping carrier to investigate the issue and provide an appropriate resolution.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer expedited shipping for all products?</AccordionTrigger>
                <AccordionContent>
                  Expedited shipping is available for most products, however some oversized items or items that require special handling may not be eligible for expedited shipping. The available shipping options will be displayed during checkout.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <h3 className="font-medium text-gray-900 mb-2">Need more information?</h3>
            <p className="text-gray-600 mb-0">
              If you have any questions about our shipping policy, please <a href="/contact" className="text-pink-400 hover:underline">contact our customer service team</a>.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ShippingPolicy;
