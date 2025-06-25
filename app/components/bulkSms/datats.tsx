"use client";
export const SAMPLE_USERS: User[] = [
  { id: 1, name: "John Doe", phone: "+1234567890", email: "john@example.com" },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1234567891",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Mike Johnson",
    phone: "+1234567892",
    email: "mike@example.com",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    phone: "+1234567893",
    email: "sarah@example.com",
  },
  {
    id: 5,
    name: "David Brown",
    phone: "+1234567894",
    email: "david@example.com",
  },
  {
    id: 6,
    name: "Emily Davis",
    phone: "+1234567895",
    email: "emily@example.com",
  },
];

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
}

export interface BulkSmsPayload {
  title: string;
  message: string;
  recipients: {
    name: string;
    phone: string;
    id: number;
  }[];
}
