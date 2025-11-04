import React from "react";
import { Stethoscope } from "lucide-react";
import Link from "next/link";

const HelloDocLogo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
    
      {/* Icon */}
      <div className="bg-blue-100 p-2 rounded-full">
        <Stethoscope className="w-6 h-6 text-blue-600" strokeWidth={2.5} />
      </div>

      {/* Logo Text */}
      <h1 className="text-2xl font-bold text-gray-800">
        <span className="text-blue-600">Hello</span>Doc
      </h1>
    </Link>
  );
};

export default HelloDocLogo;
