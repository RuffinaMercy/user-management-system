// import { useState } from "react";
// import { login } from "../services/auth.service";
// import { useNavigate, Link } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await login({ email, password });
//       const token = res.data.token;

//       localStorage.setItem("token", token);
//       const decoded = jwtDecode(token);

//       navigate(decoded.role === "admin" ? "/admin" : "/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="page-center">
//       <div className="card card-sm">
//         <h2>Login</h2>

//         {error && <p className="error">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <input
//             className="input"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             className="input"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button className="btn" type="submit">Login</button>
//         </form>

//         <p className="text-center" style={{ marginTop: 14 }}>
//           New user? <Link to="/signup">Create an account</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;










// import { useState } from "react";
// import { login } from "../services/auth.service";
// import { useNavigate, Link } from "react-router-dom";
// import { saveAuth } from "../utils/auth";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await login({ email, password });

//       // ✅ store token + user properly
//       saveAuth(res.data.token, res.data.user);

//       // ✅ role-based redirect (clean & safe)
//       if (res.data.user.role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="page-center">
//       <div className="card card-sm">
//         <h2>Login</h2>

//         {error && <p className="error">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <input
//             className="input"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             className="input"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button className="btn" type="submit">
//             Login
//           </button>
//         </form>

//         <p className="text-center" style={{ marginTop: 14 }}>
//           New user? <Link to="/signup">Create an account</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


























import { useState } from "react";
import { login } from "../services/auth.service";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await login({ email, password });
      const token = res.data.token;

      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);

      navigate(decoded.role === "admin" ? "/admin" : "/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="page-center">
      <div className="card card-sm">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn" type="submit">Login</button>
        </form>

        <p className="text-center" style={{ marginTop: 14 }}>
          New user? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;