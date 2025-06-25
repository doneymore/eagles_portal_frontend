"use client";

import { useState, useRef, useEffect } from "react";
import { SAMPLE_USERS } from "@/app/components/bulkSms/datats";
import { Header } from "@/app/components/bulkSms/header";
import { MessageTitleInput } from "@/app/components/bulkSms/messageTitleInput";
import { RichTextEditor } from "@/app/components/bulkSms/richText";
import { SelectedUsersPreview } from "@/app/components/bulkSms/selectedUserPreview";
import { SendButton } from "@/app/components/bulkSms/sendButton";
import { UserDropdown } from "@/app/components/bulkSms/userDropDown";
import { BulkSmsPayload, User } from "@/app/components/bulkSms/datats";
import React from "react";

const BulkSmsClient: React.FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Hydration protection
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close dropdown when clicking outside - only after mount
  useEffect(() => {
    if (!isMounted) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMounted]);

  const handleUserSelect = (user: User) => {
    setSelectedUsers((prev) => {
      const isSelected = prev.some((u) => u.id === user.id);
      if (isSelected) {
        return prev.filter((u) => u.id !== user.id);
      } else {
        return [...prev, user];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === SAMPLE_USERS.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers([...SAMPLE_USERS]);
    }
  };

  const handleRemoveUser = (userToRemove: User) => {
    setSelectedUsers((prev) => prev.filter((u) => u.id !== userToRemove.id));
  };

  const handleSendBulkSms = async (): Promise<void> => {
    if (selectedUsers.length === 0) {
      alert("Please select at least one user");
      return;
    }
    if (!messageTitle.trim()) {
      alert("Please enter a message title");
      return;
    }
    if (!messageContent.trim()) {
      alert("Please enter a message");
      return;
    }

    setIsLoading(true);

    // Create payload for bulk SMS
    const payload: BulkSmsPayload = {
      title: messageTitle,
      message: messageContent,
      recipients: selectedUsers.map((user) => ({
        name: user.name,
        phone: user.phone,
        id: user.id,
      })),
    };

    try {
      console.log("Bulk SMS Payload:", payload);

      // Replace this with your actual API call
      // const response = await fetch('/api/bulk-sms', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(payload),
      // });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(`Successfully sent SMS to ${selectedUsers.length} recipients!`);

      // Reset form
      setSelectedUsers([]);
      setMessageTitle("");
      setMessageContent("");
    } catch (error) {
      alert("Failed to send bulk SMS. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    selectedUsers.length > 0 && messageTitle.trim() && messageContent.trim();

  // Show loading state during hydration
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
          <UserDropdown
            users={SAMPLE_USERS}
            selectedUsers={selectedUsers}
            onUserSelect={handleUserSelect}
            onSelectAll={handleSelectAll}
            isOpen={isDropdownOpen}
            onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
            dropdownRef={dropdownRef}
          />

          <SelectedUsersPreview
            selectedUsers={selectedUsers}
            onRemoveUser={handleRemoveUser}
          />

          <MessageTitleInput value={messageTitle} onChange={setMessageTitle} />

          <RichTextEditor value={messageContent} onChange={setMessageContent} />

          <SendButton
            onSend={handleSendBulkSms}
            isLoading={isLoading}
            disabled={!isFormValid}
            selectedCount={selectedUsers.length}
          />
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          Select recipients, compose your message, and send bulk SMS with ease
        </div>
      </div>
    </div>
  );
};

export default BulkSmsClient;
