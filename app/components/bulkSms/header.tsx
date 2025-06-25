import React from "react";
import { MessageSquare } from "lucide-react";

export const Header: React.FC = () => (
  <div className="text-center mb-8">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
      <MessageSquare className="w-8 h-8 text-white" />
    </div>
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
      Bulk SMS Sender
    </h1>
    <p className="text-gray-600 text-lg">
      Send personalized messages to multiple recipients
    </p>
  </div>
);


