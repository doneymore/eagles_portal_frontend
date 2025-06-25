// app/posts/posts-list.tsx
"use client";

import { useDeletePostMutation, useUpdatePostMutation } from "@/app/components/redux/services/postApi";
import { useCreatePostMutation, useGetPostsQuery } from "@/app/components/redux/services/slice";
import { useEffect, useState } from "react";

// Define the Post interface
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}


export default function PostsList() {
  const [mounted, setMounted] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [newPost, setNewPost] = useState({ title: "", body: "", userId: 1 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Queries and Mutations
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = useGetPostsQuery(undefined, {
    skip: !mounted, // Skip the query until component is mounted
  });
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  // CREATE
  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost(newPost).unwrap();
      setNewPost({ title: "", body: "", userId: 1 });
      alert("Post created successfully!");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  // UPDATE
  const handleUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    try {
      await updatePost(editingPost).unwrap();
      setEditingPost(null);
      alert("Post updated successfully!");
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  // DELETE
  const handleDeletePost = async (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost(id).unwrap();
        alert("Post deleted successfully!");
      } catch (error) {
        console.error("Failed to delete post:", error);
      }
    }
  };

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Posts CRUD with RTK Query</h1>

      {/* CREATE FORM */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
        <form onSubmit={handleCreatePost} className="space-y-4">
          <input
            type="text"
            placeholder="Post title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Post body"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            className="w-full p-2 border rounded h-24"
            required
          />
          <input
            type="number"
            placeholder="User ID"
            value={newPost.userId}
            onChange={(e) =>
              setNewPost({ ...newPost, userId: parseInt(e.target.value) })
            }
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            disabled={isCreating}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isCreating ? "Creating..." : "Create Post"}
          </button>
        </form>
      </div>

      {/* UPDATE FORM */}
      {editingPost && (
        <div className="mb-8 p-4 border rounded-lg bg-yellow-50">
          <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
          <form onSubmit={handleUpdatePost} className="space-y-4">
            <input
              type="text"
              value={editingPost.title}
              onChange={(e) =>
                setEditingPost({ ...editingPost, title: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              value={editingPost.body}
              onChange={(e) =>
                setEditingPost({ ...editingPost, body: e.target.value })
              }
              className="w-full p-2 border rounded h-24"
              required
            />
            <input
              type="number"
              value={editingPost.userId}
              onChange={(e) =>
                setEditingPost({
                  ...editingPost,
                  userId: parseInt(e.target.value),
                })
              }
              className="w-full p-2 border rounded"
              required
            />
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isUpdating}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
              >
                {isUpdating ? "Updating..." : "Update Post"}
              </button>
              <button
                type="button"
                onClick={() => setEditingPost(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* POSTS LIST */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">All Posts</h2>
          <button
            onClick={() => refetch()}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Refresh
          </button>
        </div>

        {posts?.slice(0, 10).map((post) => (
          <div key={post.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <span className="text-sm text-gray-500">ID: {post.id}</span>
            </div>
            <p className="text-gray-700 mb-3">{post.body}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setEditingPost(post)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                disabled={isDeleting}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
