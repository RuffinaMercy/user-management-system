import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Get all users
export const getAllUsers = (page = 1) =>
  API.get(`/admin/users?page=${page}`);

// Activate user
export const activateUser = (userId) =>
  API.patch(`/admin/users/${userId}/activate`);

// Deactivate user
export const deactivateUser = (userId) =>
  API.patch(`/admin/users/${userId}/deactivate`);
