import api from "./api";

// Types for better TypeScript support
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

// User service using JSONPlaceholder
export const userService = {
  // Get all users
  getUsers: async (): Promise<User[]> => {
    const response = await api.get("/users");
    return response.data;
  },

  // Get single user
  getUser: async (id: number): Promise<User> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  // Create user (dummy - won't actually create)
  createUser: async (userData: Partial<User>): Promise<User> => {
    const response = await api.post("/users", userData);
    return response.data;
  },

  // Update user (dummy - won't actually update)
  updateUser: async (id: number, userData: Partial<User>): Promise<User> => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  // Delete user (dummy - won't actually delete)
  deleteUser: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};

// Posts service
export const postService = {
  getPosts: async (): Promise<Post[]> => {
    const response = await api.get("/posts");
    return response.data;
  },

  getPost: async (id: number): Promise<Post> => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  getPostsByUser: async (userId: number): Promise<Post[]> => {
    const response = await api.get(`/posts?userId=${userId}`);
    return response.data;
  },

  createPost: async (postData: Omit<Post, "id">): Promise<Post> => {
    const response = await api.post("/posts", postData);
    return response.data;
  },
};

// Todos service
export const todoService = {
  getTodos: async (): Promise<Todo[]> => {
    const response = await api.get("/todos");
    return response.data;
  },

  getTodosByUser: async (userId: number): Promise<Todo[]> => {
    const response = await api.get(`/todos?userId=${userId}`);
    return response.data;
  },

  createTodo: async (todoData: Omit<Todo, "id">): Promise<Todo> => {
    const response = await api.post("/todos", todoData);
    return response.data;
  },

  updateTodo: async (id: number, todoData: Partial<Todo>): Promise<Todo> => {
    const response = await api.put(`/todos/${id}`, todoData);
    return response.data;
  },
};
