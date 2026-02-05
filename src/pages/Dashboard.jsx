import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const API_URL = import.meta.env.VITE_API_URL;
function Dashboard() {
  const navigate = useNavigate();
const [user, setUser] = useState(null);

  // Protect dashboard
 useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }

  fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Unauthorized");
      return res.json();
    })
    .then((data) => {
      setUser(data);
    })
    .catch(() => {
      localStorage.removeItem("token");
      navigate("/login");
    });
}, [navigate]);

  // Temporary static data (replace with API later)
  if (!user) {
  return <p style={{ textAlign: "center", marginTop: "100px" }}>Loading dashboard...</p>;
}
  const viewedProducts = 10;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
       <Link to="/" className="logo">
  <img src="/logo.png" alt="ASAT Automation" />
  <h1>| ASAT AUTOMATION</h1>
</Link>

        <div className="nav-links">
          <button className="nav-link" onClick={() => navigate("/")}>HOME</button>
<button className="nav-link" onClick={() => navigate("/products")}>PRODUCTS</button>
<button className="nav-link" onClick={() => navigate("/aboutus")}>ABOUT US</button>
<button className="nav-link" onClick={() => navigate("/contact")}>CONTACT</button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="dashboard-container">
        {/* STATS */}
        <section className="stats">
          <div className="stat-card">
            <span className="stat-icon">👤</span>
            <div>
              <p className="stat-label">Account</p>
              <p className="stat-value">{user.name}</p>
              <p className="stat-value">{user.email}</p>

            </div>
          </div>
        
          <div className="stat-card">
            <span className="stat-icon">👁</span>
            <div>
              <p className="stat-label">Viewed Products</p>
              <p className="stat-value">{viewedProducts}</p>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon">📦</span>
            <div>
              <p className="stat-label">Member Since</p>
<p className="stat-value">
  {user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      })
    : ""}
</p>     
      </div>
          </div>
        </section>

        
      </main>
    </>
  );
}

export default Dashboard;
