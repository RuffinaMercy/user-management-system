import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  const decoded = jwtDecode(token);
  return decoded.role === "admin"
    ? children
    : <Navigate to="/dashboard" />;
};

export default AdminRoute;
