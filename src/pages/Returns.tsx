
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, Package } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const Returns = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Returns" 
        description="Initiate and track your product returns"
      />
      
      <div className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="new">New Return</TabsTrigger>
            <TabsTrigger value="track">Track Return</TabsTrigger>
          </TabsList>
          
          <TabsContent value="new">
            <Card>
              <CardHeader>
                <CardTitle>Initiate a Return</CardTitle>
                <CardDescription>
                  To start the return process, please enter your order details below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="order-id" className="text-sm font-medium">
                      Order ID
                    </label>
                    <Input 
                      id="order-id" 
                      placeholder="Enter your order number (e.g., ORD-12345)" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter the email used for your order" 
                    />
                  </div>
                  
                  <Button>Find My Order</Button>
                </form>
                
                <div className="mt-8 border-t pt-6">
                  <h3 className="text-sm font-medium mb-2">Need help with your return?</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Check our <Link to="/returns-policy" className="text-pink-400 hover:underline">Returns Policy</Link> or <Link to="/contact" className="text-pink-400 hover:underline">Contact Customer Service</Link>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="track">
            <Card>
              <CardHeader>
                <CardTitle>Track Your Return</CardTitle>
                <CardDescription>
                  Enter your return authorization number to check the status of your return.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="return-id" className="text-sm font-medium">
                      Return Authorization Number
                    </label>
                    <Input 
                      id="return-id" 
                      placeholder="Enter your return number (e.g., RET-12345)" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="track-email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="track-email" 
                      type="email" 
                      placeholder="Enter the email used for your return" 
                    />
                  </div>
                  
                  <Button>Track Return</Button>
                </form>
                
                <div className="mt-8 flex flex-col items-center justify-center py-8 text-center">
                  <RotateCcw className="h-10 w-10 text-gray-300 mb-4" />
                  <p className="text-gray-500">No return information to display.</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Enter your return details above to track its status.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Returns;
