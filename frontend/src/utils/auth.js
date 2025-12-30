// export const getToken = () => {
//   return localStorage.getItem("token");
// };

// export const getUser = () => {
//   const user = localStorage.getItem("user");
//   return user ? JSON.parse(user) : null;
// };

// export const saveAuth = (token, user) => {
//   localStorage.setItem("token", token);
//   localStorage.setItem("user", JSON.stringify(user));
// };

// export const logout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
// };

// export const isLoggedIn = () => {
//   return !!localStorage.getItem("token");
// };

// export const isAdmin = () => {
//   const user = getUser();
//   return user?.role === "admin";
// };










import { jwtDecode } from "jwt-decode";

export const getToken = () => localStorage.getItem("token");

export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};