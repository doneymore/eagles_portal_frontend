
import React from "react";
import { ChevronDown, Users, Check, Phone } from "lucide-react";

interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
}

interface UserDropdownProps {
  users: User[];
  selectedUsers: User[];
  onUserSelect: (user: User) => void;
  onSelectAll: () => void;
  isOpen: boolean;
  onToggle: () => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({
  users,
  selectedUsers,
  onUserSelect,
  onSelectAll,
  isOpen,
  onToggle,
  dropdownRef,
}) => {
  return (
    <div className="mb-8">
      <label className="flex items-center text-lg font-semibold text-gray-800 mb-4">
        <Users className="w-5 h-5 mr-2 text-indigo-600" />
        Select Recipients
      </label>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl hover:border-indigo-300 focus:border-indigo-500 focus:outline-none transition-all duration-200"
        >
          <span className="text-gray-700">
            {selectedUsers.length === 0
              ? "Choose recipients..."
              : `${selectedUsers.length} user${
                  selectedUsers.length !== 1 ? "s" : ""
                } selected`}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto">
            {/* Select All Option */}
            <div
              onClick={onSelectAll}
              className="flex items-center px-4 py-3 hover:bg-indigo-50 cursor-pointer border-b border-gray-100 transition-colors duration-150"
            >
              <div className="flex items-center justify-center w-5 h-5 mr-3">
                {selectedUsers.length === users.length ? (
                  <Check className="w-4 h-4 text-indigo-600" />
                ) : (
                  <div className="w-4 h-4 border border-gray-300 rounded"></div>
                )}
              </div>
              <span className="font-medium text-indigo-600">
                {selectedUsers.length === users.length
                  ? "Deselect All"
                  : "Select All"}
              </span>
              <span className="ml-auto text-sm text-gray-500">
                {users.length} users
              </span>
            </div>

            {/* Individual Users */}
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => onUserSelect(user)}
                className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
              >
                <div className="flex items-center justify-center w-5 h-5 mr-3">
                  {selectedUsers.some((u) => u.id === user.id) ? (
                    <Check className="w-4 h-4 text-indigo-600" />
                  ) : (
                    <div className="w-4 h-4 border border-gray-300 rounded"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Phone className="w-3 h-3 mr-1" />
                    {user.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


