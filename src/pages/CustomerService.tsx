
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Mail, Truck, RotateCcw, HelpCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const CustomerService = () => {
  const serviceLinks = [
    {
      title: "Contact Us",
      description: "Get in touch with our customer support team",
      icon: <Mail className="h-6 w-6" />,
      href: "/contact"
    },
    {
      title: "Shipping Information",
      description: "Learn about our shipping policies and delivery times",
      icon: <Truck className="h-6 w-6" />,
      href: "/shipping"
    },
    {
      title: "Returns & Exchanges",
      description: "Understand our return and exchange policies",
      icon: <RotateCcw className="h-6 w-6" />,
      href: "/returns-policy"
    },
    {
      title: "FAQs",
      description: "Find answers to commonly asked questions",
      icon: <HelpCircle className="h-6 w-6" />,
      href: "/faqs"
    }
  ];
  
  return (
    <PageLayout>
      <PageHeader 
        title="Customer Service" 
        description="We're here to help with any questions or concerns"
      />
      
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-800">How Can We Help?</h2>
            <div className="grid gap-4">
              {serviceLinks.map((link, index) => (
                <Link to={link.href} key={index}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-center">
                      <div className="bg-purple-50 p-3 rounded-full mr-4 text-purple-600">
                        {link.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{link.title}</h3>
                        <p className="text-sm text-gray-500">{link.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Popular Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                <AccordionContent>
                  Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 business day delivery. International shipping may take 7-14 business days depending on the destination.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for unworn items in their original packaging. Returns are free for store credit, or a small fee applies for refunds to the original payment method. Visit our <Link to="/returns-policy" className="text-pink-400 hover:underline">Returns Policy</Link> page for complete details.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I track my order?</AccordionTrigger>
                <AccordionContent>
                  Once your order ships, you will receive a confirmation email with tracking information. You can also check the status of your order in your <Link to="/account" className="text-pink-400 hover:underline">account</Link> dashboard.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Duties and taxes may apply and are the responsibility of the customer.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I care for my dresses?</AccordionTrigger>
                <AccordionContent>
                  Each dress comes with specific care instructions on the label. Generally, we recommend gentle hand washing or dry cleaning for most of our dresses. Always check the care label for specific instructions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-6">
              <Link to="/faqs">
                <Button variant="outline" className="w-full">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6 text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Need More Help?</h2>
            <p className="text-gray-600 max-w-md">
              Our customer service team is available Monday through Friday, 9am-5pm EST to assist you.
            </p>
          </div>
          <Link to="/contact">
            <Button className="min-w-[150px]">
              <Headphones className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default CustomerService;
