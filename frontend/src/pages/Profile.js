import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/auth.service";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getCurrentUser(token).then((res) => setUser(res.data));
  }, []);

  if (!user) return null;

  return (
    <div className="page-center">
      <div className="card card-lg">
        <h2>User Profile</h2>

        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Status:</strong> {user.status}</p>
        <p>
          <strong>Account Created:</strong>{" "}
          {new Date(user.created_at).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default Profile;
