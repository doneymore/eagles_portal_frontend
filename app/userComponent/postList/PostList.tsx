"use client";

import { useApi } from "@/app/components/hooks/useApi";
import { Post, postService } from "@/app/components/lib/services";



export default function PostsList() {
  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useApi<Post[]>(() => postService.getPosts());

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Posts</h2>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Refresh Posts
        </button>
      </div>

      <div className="space-y-4">
        {posts?.slice(0, 10).map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow border">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
            <p className="text-sm text-gray-500 mt-2">User ID: {post.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
