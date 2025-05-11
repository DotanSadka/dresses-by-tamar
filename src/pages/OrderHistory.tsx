
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package, ShoppingBag } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const OrderHistory = () => {
  // In a real app, this would come from a user context or API call
  const orders: any[] = [];
  const isEmpty = orders.length === 0;
  
  return (
    <PageLayout>
      <PageHeader 
        title="Order History" 
        description="Track and manage your previous orders"
      />
      
      <div className="container mx-auto px-4 pb-12">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Package className="h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-xl font-medium text-gray-900 mb-2">No orders yet</h2>
            <p className="text-gray-500 mb-8">Once you place an order, you'll be able to track it here.</p>
            <Link to="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#ORD-12345</TableCell>
                  <TableCell>May 8, 2025</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                      Delivered
                    </Badge>
                  </TableCell>
                  <TableCell>$149.99</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#ORD-12344</TableCell>
                  <TableCell>April 22, 2025</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
                      Shipped
                    </Badge>
                  </TableCell>
                  <TableCell>$89.99</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default OrderHistory;
