import React from "react";
import { X } from "lucide-react";

interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
}

interface SelectedUsersPreviewProps {
  selectedUsers: User[];
  onRemoveUser: (user: User) => void;
}

export const SelectedUsersPreview: React.FC<SelectedUsersPreviewProps> = ({
  selectedUsers,
  onRemoveUser,
}) => {
  if (selectedUsers.length === 0) return null;

  return (
    <div className="mt-4 p-4 bg-indigo-50 rounded-xl">
      <div className="flex flex-wrap gap-2">
        {selectedUsers.slice(0, 3).map((user) => (
          <span
            key={user.id}
            className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
          >
            {user.name}
            <button
              onClick={() => onRemoveUser(user)}
              className="ml-2 hover:bg-indigo-200 rounded-full p-0.5 transition-colors duration-150"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        {selectedUsers.length > 3 && (
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            +{selectedUsers.length - 3} more
          </span>
        )}
      </div>
    </div>
  );
};


