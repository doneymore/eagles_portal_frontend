"use client";

import { User, userService } from "@/app/components/lib/services";
import { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedUsers = await userService.getUsers();
      setUsers(fetchedUsers);
    } catch (err: any) {
      setError(err.message);
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await userService.deleteUser(id);
      // Remove from local state (since it's a dummy API)
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully!");
    } catch (err: any) {
      alert("Error deleting user: " + err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        <p>Error: {error}</p>
        <button
          onClick={fetchUsers}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Users</h2>
        <button
          onClick={fetchUsers}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow border">
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-blue-600">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
