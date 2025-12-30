import axios from "axios";

const API = "http://localhost:5000";

export const login = (data) =>
  axios.post(`${API}/auth/login`, data);

export const signup = (data) =>
  axios.post(`${API}/auth/signup`, data);

export const getCurrentUser = (token) =>
  axios.get(`${API}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getAllUsers = (token) =>
  axios.get(`${API}/admin/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deactivateUser = (id, token) =>
  axios.patch(
    `${API}/admin/users/${id}/deactivate`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
