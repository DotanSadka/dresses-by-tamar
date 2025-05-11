
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqCategories = [
    {
      id: "orders",
      label: "Orders & Shipping",
      faqs: [
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a shipping confirmation email with your tracking information. You can also check the status of your order by logging into your account and viewing your order history."
        },
        {
          question: "How long does shipping take?",
          answer: "Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 business day delivery. International shipping may take 7-14 business days depending on the destination."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Duties and taxes may apply and are the responsibility of the customer."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "Orders can be changed or canceled within 1 hour of placing them. After this window, we begin processing orders quickly and cannot guarantee changes or cancellations. Please contact customer service as soon as possible if you need to make changes."
        },
        {
          question: "Is there free shipping?",
          answer: "We offer free standard shipping on all orders over $75 within the United States."
        }
      ]
    },
    {
      id: "returns",
      label: "Returns & Exchanges",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for unworn items in their original condition with tags attached. Returns are free for store credit, or a small fee applies for refunds to the original payment method."
        },
        {
          question: "How do I start a return?",
          answer: "To initiate a return, visit the Returns page on our website or go to your account order history. Enter your order details and follow the instructions to generate a return shipping label."
        },
        {
          question: "How long does it take to process a refund?",
          answer: "Once we receive your return, it typically takes 1-3 business days to inspect and process. After that, refunds take an additional 3-5 business days to appear in your account, depending on your bank or credit card company."
        },
        {
          question: "Can I exchange an item for a different size?",
          answer: "Yes, we offer exchanges for different sizes or colors, subject to availability. Select the 'Exchange' option when initiating your return. No return shipping fee applies for straightforward size exchanges."
        },
        {
          question: "What items cannot be returned?",
          answer: "Final sale items, intimates, accessories marked as non-returnable, and items that have been worn, washed, or damaged cannot be returned or exchanged."
        }
      ]
    },
    {
      id: "products",
      label: "Products & Sizing",
      faqs: [
        {
          question: "How do I find the right size?",
          answer: "We provide detailed size guides for all our products. You can find the size guide on each product page. For more personalized assistance, feel free to contact our customer service team."
        },
        {
          question: "Are your measurements in inches or centimeters?",
          answer: "Our size guides provide measurements in both inches and centimeters for your convenience."
        },
        {
          question: "How should I care for my dresses?",
          answer: "Each dress comes with specific care instructions on the label. Generally, we recommend gentle hand washing or dry cleaning for most of our dresses. Always check the care label for specific instructions."
        },
        {
          question: "Are your fabrics sustainable?",
          answer: "We are committed to increasing our use of sustainable fabrics. Many of our products are made with eco-friendly materials, which are clearly labeled in the product description."
        },
        {
          question: "Do you offer custom sizing?",
          answer: "We currently do not offer custom sizing for our regular collection. However, we do offer a wide range of sizes from XS to XXL to accommodate various body types."
        }
      ]
    },
    {
      id: "account",
      label: "Account & Orders",
      faqs: [
        {
          question: "How do I create an account?",
          answer: "You can create an account by clicking on the 'Account' icon in the top right corner of our website and selecting 'Create Account'. You'll need to provide your email address and create a password."
        },
        {
          question: "I forgot my password. How can I reset it?",
          answer: "Click on the 'Account' icon, select 'Log In', and then click on 'Forgot Password'. Enter your email address, and we'll send you instructions to reset your password."
        },
        {
          question: "How can I view my order history?",
          answer: "Log into your account and navigate to the 'Order History' section. There you can view all your past orders, track shipments, and initiate returns."
        },
        {
          question: "Can I place an order without creating an account?",
          answer: "Yes, we offer guest checkout for your convenience. However, creating an account allows you to track orders, save shipping addresses, and earn rewards."
        },
        {
          question: "How do I update my account information?",
          answer: "Log into your account and go to 'Account Settings' to update your personal information, shipping addresses, and payment methods."
        }
      ]
    },
    {
      id: "payment",
      label: "Payment & Security",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept Visa, Mastercard, American Express, Discover, PayPal, and Shop Pay. All transactions are secure and encrypted."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard encryption and security protocols to protect your payment information. We are PCI compliant and never store your full credit card details."
        },
        {
          question: "When will I be charged for my order?",
          answer: "Your payment method will be authorized when you place your order and charged when your order ships."
        },
        {
          question: "Do you offer installment payment options?",
          answer: "Yes, we partner with Afterpay and Klarna to offer installment payment options at checkout."
        },
        {
          question: "Can I use multiple payment methods for one order?",
          answer: "Currently, we only support using one payment method per order, including gift cards."
        }
      ]
    }
  ];
  
  const filteredFaqs = searchQuery.length > 2 
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;
  
  return (
    <PageLayout>
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Find answers to commonly asked questions about our products and services"
      />
      
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Search bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search for answers..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* FAQ Content */}
          {searchQuery.length > 2 ? (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Search Results for "{searchQuery}"
              </h2>
              
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No results found for your search.</p>
                  <p className="text-gray-500">Try using different keywords or browse our FAQ categories below.</p>
                </div>
              ) : (
                filteredFaqs.map((category) => (
                  <div key={category.id} className="mb-8">
                    <h3 className="font-medium text-lg text-gray-900 mb-4">{category.label}</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.id}-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))
              )}
            </div>
          ) : (
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 mb-8">
                {faqCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">
                      {category.label}
                    </h2>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.id}-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
          
          <div className="bg-purple-50 rounded-lg p-6 mt-8 text-center">
            <h3 className="font-medium text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Please reach out to our customer support team.
            </p>
            <Link to="/contact">
              <Button>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
