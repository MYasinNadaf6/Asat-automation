import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  // Protect dashboard
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  // Temporary static data (replace with API later)
  const email = "myasin@gmail.com";
  const Name = "Yasin Nadaf";
  const memberSince = "December 2025";
  const viewedProducts = 10;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
<img src="/logo.png" alt="ASAT Automation" />
<h1>| ASAT AUTOMATION</h1>
</div>

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
              <p className="stat-value">{Name}</p>
              <p className="stat-value">{email}</p>
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
              <p className="stat-value">{memberSince}</p>
            </div>
          </div>
        </section>

        
      </main>
    </>
  );
}

export default Dashboard;
