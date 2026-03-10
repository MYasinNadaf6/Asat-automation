import React, { useEffect, useState } from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

const AdminLayout = () => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return setIsAdmin(false);

        // Call the /me route you already have in auth.js
        const res = await axios.get("https://asat-backend.onrender.com/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` }
        });

        // Check if the role in database is "admin"
        if (res.data.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, []);

  if (isAdmin === null) return <div className="bg-black h-screen text-white p-10">Verifying ASAT Credentials...</div>;
  if (isAdmin === false) return <Navigate to="/" />;

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 border-r border-amber-900/30 p-6 flex flex-col gap-6">
        <h1 className="text-xl font-bold text-amber-500 mb-4 uppercase">ASAT ADMIN</h1>
        <nav className="flex flex-col gap-2">
          <Link to="/admin/add-product" className="p-3 hover:bg-zinc-800 rounded transition">Add Product</Link>
          <Link to="/admin/manage-products" className="p-3 hover:bg-zinc-800 rounded transition">Manage Products</Link>
          <Link to="/admin/monitoring" className="p-3 hover:bg-zinc-800 rounded transition">User Monitoring</Link>
          <hr className="border-zinc-800 my-4" />
          <Link to="/" className="p-3 text-gray-500 hover:text-white transition">Exit Admin</Link>
        </nav>
      </div>

      <div className="flex-grow">
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminLayout;