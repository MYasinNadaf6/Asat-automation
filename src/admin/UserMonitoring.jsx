import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserMonitoring = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token"); // Get your login token
      const res = await axios.get("https://asat-backend.onrender.com/api/auth/users", {
        headers: { Authorization: `Bearer ${token}` } // Send token to backend
      });
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err);
      setLoading(false);
    }
  };
  fetchUsers();
}, []);

  return (
    <div className="p-10 bg-zinc-950 min-h-screen text-white">
      <h2 className="text-3xl font-bold text-amber-500 mb-8">User Activity & Monitoring</h2>
      
      <div className="overflow-x-auto bg-zinc-900 rounded-xl border border-amber-900/20">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-amber-900/30 text-amber-200">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Registered Date</th>
            </tr>
          </thead>
          <tbody>
           
{users.map((user) => (
  <tr key={user._id} className="...">
    <td className="p-4 font-medium">{user.name}</td>
    <td className="p-4 text-gray-400">{user.email}</td>
    <td className="p-4">
      {/* UPDATE THIS DYNAMIC CHECK */}
      {user.role === "admin" ? (
        <span className="px-2 py-1 rounded bg-amber-900/30 text-amber-500 text-xs font-bold uppercase">
          Admin
        </span>
      ) : (
        <span className="px-2 py-1 rounded bg-zinc-800 text-gray-400 text-xs font-medium">
          Regular User
        </span>
      )}
    </td>
    <td className="p-4 text-gray-500 text-sm">
      {new Date(user.createdAt).toLocaleDateString()}
    </td>
  </tr>
))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserMonitoring;