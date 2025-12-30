

// import { Link, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import { useState } from "react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const [showPopup, setShowPopup] = useState(false);

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleAdminClick = (e) => {
//     if (!token) return;

//     const decoded = jwtDecode(token);

//     if (decoded.role !== "admin") {
//       e.preventDefault();
//       setShowPopup(true);
//     }
//   };

//   return (
//     <>
//       {/* 🔹 NAVBAR */}
//       <div
//         style={{
//           borderBottom: "1px solid #ccc",
//           padding: "16px 0",
//           textAlign: "center",
//         }}
//       >
//         <div
//           style={{
//             fontSize: "26px",
//             fontWeight: "bold",
//             letterSpacing: "1px",
//             marginBottom: "10px",
//           }}
//         >
//           MINI USER MANAGEMENT SYSTEM
//         </div>

//         {token && (
//           <div style={{ fontSize: "16px" }}>
//             <Link to="/dashboard">Dashboard</Link> {" | "}
//             <Link to="/profile">Profile</Link> {" | "}
//             <Link to="/admin" onClick={handleAdminClick}>
//               Admin
//             </Link>{" | "}
//             <button
//               onClick={logout}
//               style={{
//                 marginLeft: 6,
//                 padding: "4px 10px",
//                 cursor: "pointer",
//               }}
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>

//       {/* 🔹 FRIENDLY POPUP */}
//       {showPopup && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.4)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               padding: "24px",
//               width: "320px",
//               borderRadius: "6px",
//               textAlign: "center",
//             }}
//           >
//             <h3 style={{ marginBottom: 12 }}>Access Restricted</h3>
//             <p style={{ marginBottom: 20 }}>
//               This page is accessible only to admin users.
//             </p>

//             <button
//               onClick={() => setShowPopup(false)}
//               style={{
//                 padding: "8px 16px",
//                 cursor: "pointer",
//               }}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


























import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [showPopup, setShowPopup] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleAdminClick = (e) => {
    if (!token) return;

    const decoded = jwtDecode(token);

    if (decoded.role !== "admin") {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  return (
    <>
      {/* 🔹 NAVBAR */}
      <div
        style={{
          borderBottom: "1px solid #ccc",
          padding: "16px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            letterSpacing: "1px",
            marginBottom: "10px",
          }}
        >
          MINI USER MANAGEMENT SYSTEM
        </div>

        {token && (
          <div style={{ fontSize: "16px" }}>
            <Link to="/dashboard">Dashboard</Link> {" | "}
            <Link to="/profile">Profile</Link> {" | "}
            <Link to="/admin" onClick={handleAdminClick}>
              Admin
            </Link>{" | "}
            <button
              onClick={logout}
              style={{
                marginLeft: 6,
                padding: "4px 10px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* 🔹 FRIENDLY POPUP */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "24px",
              width: "320px",
              borderRadius: "6px",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: 12 }}>Access Restricted</h3>
            <p style={{ marginBottom: 20 }}>
              This page is accessible only to admin users.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              style={{
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;