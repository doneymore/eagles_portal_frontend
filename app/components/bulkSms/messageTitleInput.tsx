import React from "react";
import { Type } from "lucide-react";

interface MessageTitleInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export const MessageTitleInput: React.FC<MessageTitleInputProps> = ({
  value,
  onChange,
  maxLength = 100,
}) => {
  return (
    <div className="mb-8">
      <label className="flex items-center text-lg font-semibold text-gray-800 mb-4">
        <Type className="w-5 h-5 mr-2 text-indigo-600" />
        Message Title
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your message title..."
        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
        maxLength={maxLength}
      />
      <div className="mt-2 text-sm text-gray-500 text-right">
        {value.length}/{maxLength} characters
      </div>
    </div>
  );
};
