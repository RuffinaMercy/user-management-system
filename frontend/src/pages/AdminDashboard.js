import { useEffect, useState, useCallback } from "react";
import { getAllUsers, deactivateUser } from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const loadUsers = useCallback(async () => {
    const res = await getAllUsers(token);
    setUsers(res.data.users);
  }, [token]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const decoded = jwtDecode(token);
    if (decoded.role !== "admin") {
      navigate("/dashboard");
      return;
    }

    loadUsers();
  }, [token, navigate, loadUsers]);

  const handleDeactivate = async (id) => {
    await deactivateUser(id, token);
    loadUsers();
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Admin Dashboard</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Full Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.email}</td>
                <td>{u.full_name}</td>
                <td>{u.role}</td>
                <td>{u.status}</td>
                <td>
                  {u.status === "active" ? (
                    <button
                      className="btn-danger"
                      onClick={() => handleDeactivate(u.id)}
                    >
                      Deactivate
                    </button>
                  ) : (
                    "Inactive"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;