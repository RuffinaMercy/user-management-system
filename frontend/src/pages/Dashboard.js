
import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/auth.service";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getCurrentUser(token).then((res) => setUser(res.data));
  }, []);

  if (!user) return null; // ❌ no "Loading..." flash

  return (
    <div className="page-center">
      <div className="card card-md">
        <h2>User Dashboard</h2>

        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default Dashboard;
