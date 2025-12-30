

// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import AdminDashboard from "./pages/AdminDashboard";

// function App() {
//   const location = useLocation();
//   const token = localStorage.getItem("token");

//   // Hide navbar on auth pages
//   const hideNavbar =
//     location.pathname === "/login" ||
//     location.pathname === "/signup";

//   return (
//     <>
//       {!hideNavbar && token && <Navbar />}

//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//     </>
//   );
// }

// export default App;







import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
