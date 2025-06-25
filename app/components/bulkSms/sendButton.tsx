import React from "react";
import { Send } from "lucide-react";

interface SendButtonProps {
  onSend: () => void;
  isLoading: boolean;
  disabled: boolean;
  selectedCount: number;
}

export const SendButton: React.FC<SendButtonProps> = ({
  onSend,
  isLoading,
  disabled,
  selectedCount,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="text-sm text-gray-600">
        {selectedCount > 0 && (
          <span>
            Ready to send to {selectedCount} recipient
            {selectedCount !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      <button
        onClick={onSend}
        disabled={disabled || isLoading}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Bulk SMS
          </>
        )}
      </button>
    </div>
  );
};
