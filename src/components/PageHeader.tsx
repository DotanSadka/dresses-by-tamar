
import React from "react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="bg-purple-50 py-8 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">{title}</h1>
          {description && <p className="text-gray-600 text-center max-w-2xl">{description}</p>}
          <div className="mt-4 text-sm text-gray-500 flex items-center space-x-2">
            <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
