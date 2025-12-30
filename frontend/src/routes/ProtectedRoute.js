// import { Navigate } from "react-router-dom";
// import { getToken } from "../utils/auth";

// const ProtectedRoute = ({ children }) => {
//   const token = getToken();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;








// import { Navigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// const ProtectedRoute = ({ children, role }) => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   try {
//     const decoded = jwtDecode(token);

//     if (role && decoded.role !== role) {
//       return <Navigate to="/dashboard" replace />;
//     }

//     return children;
//   } catch {
//     localStorage.removeItem("token");
//     return <Navigate to="/login" replace />;
//   }
// };

// export default ProtectedRoute;













import { Navigate } from "react-router-dom";
import { getToken } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;