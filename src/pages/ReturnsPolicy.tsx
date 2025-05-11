
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertCircle, Clock, Package } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

const ReturnsPolicy = () => {
  const returnSteps = [
    {
      title: "Initiate Return",
      description: "Start the return process through your account or the returns page",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Package Items",
      description: "Pack the items in their original packaging with tags attached",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Ship Return",
      description: "Use our provided shipping label and drop off at a carrier location",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Refund Processing",
      description: "Refunds are processed within 5-7 business days of receiving the return",
      icon: <Clock className="h-6 w-6" />
    }
  ];
  
  return (
    <PageLayout>
      <PageHeader 
        title="Returns Policy" 
        description="Information about our return and exchange policies"
      />
      
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Our Return Policy</h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                At PastelDress, we want you to be completely satisfied with your purchase. If you're not entirely happy, we offer a simple returns process.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      We offer a 30-day return policy for unworn items in their original condition with tags attached.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-medium text-gray-800 mb-2">Return Eligibility:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    Items must be unworn, unwashed, and in their original condition with all tags attached.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    Returns must be initiated within 30 days of receiving your order.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    Original packaging should be included whenever possible.
                  </p>
                </li>
              </ul>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      Final sale items, intimates, and accessories marked as non-returnable cannot be returned or exchanged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Return Process</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {returnSteps.map((step, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4 flex">
                  <div className="bg-purple-50 p-3 rounded-full mr-4 text-purple-600 flex-shrink-0 h-12 w-12 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Refund Options</h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                We offer the following refund options:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800 font-medium">Store Credit</p>
                    <p className="text-gray-600">
                      Receive a store credit for the full purchase amount. Store credit never expires and can be used on future purchases. No return shipping fee.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800 font-medium">Original Payment Method</p>
                    <p className="text-gray-600">
                      Receive a refund to your original payment method. A $4.99 return shipping fee will be deducted from your refund amount.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800 font-medium">Exchanges</p>
                    <p className="text-gray-600">
                      Exchange for a different size or color, subject to availability. No return shipping fee for straightforward size exchanges.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does it take to process my return?</AccordionTrigger>
                <AccordionContent>
                  Once we receive your return, it typically takes 1-3 business days to inspect and process it. After that, refunds take an additional 3-5 business days to appear in your account, depending on your bank or credit card company.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I exchange an item instead of returning it?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer exchanges for different sizes or colors, subject to availability. To request an exchange, select the "Exchange" option when initiating your return. If the item you want is available, we'll ship it to you as soon as we receive your return.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What if I received a defective or incorrect item?</AccordionTrigger>
                <AccordionContent>
                  If you received a defective or incorrect item, please contact our customer service team immediately. We'll provide a prepaid return label and process a replacement or full refund, including any shipping costs. Please include photos of the defective item when contacting us.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I have to pay for return shipping?</AccordionTrigger>
                <AccordionContent>
                  For standard returns requesting a refund to the original payment method, a $4.99 return shipping fee will be deducted from your refund. Returns for store credit or straightforward size exchanges are free. Return shipping is also free for defective or incorrectly shipped items.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I start a return or exchange?</AccordionTrigger>
                <AccordionContent>
                  To initiate a return or exchange, visit our <Link to="/returns" className="text-pink-400 hover:underline">Returns page</Link> or go to your account order history. Enter your order details and follow the instructions to generate a return shipping label. You can also contact our customer service team for assistance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <h3 className="font-medium text-gray-900 mb-2">Ready to return or exchange an item?</h3>
            <p className="text-gray-600 mb-4">
              Start your return process easily through our returns portal.
            </p>
            <Link 
              to="/returns"
              className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white bg-pink-400 rounded-md hover:bg-pink-500"
            >
              Initiate a Return
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReturnsPolicy;
