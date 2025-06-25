"use client";
import { useState, useRef, useEffect } from "react";
import { BulkSmsPayload, User } from "../bulkSms/datats";

export const useBulkSms = (users: User[]) => {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
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
  }, []);

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
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers([...users]);
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

  return {
    selectedUsers,
    isDropdownOpen,
    messageTitle,
    messageContent,
    isLoading,
    dropdownRef,
    isFormValid,
    setIsDropdownOpen,
    setMessageTitle,
    setMessageContent,
    handleUserSelect,
    handleSelectAll,
    handleRemoveUser,
    handleSendBulkSms,
  };
};
