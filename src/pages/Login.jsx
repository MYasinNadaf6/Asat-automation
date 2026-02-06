import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/App.css";

function login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  // Forgot password popup
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
const API_URL = import.meta.env.VITE_API_URL;

const url = isLogin
  ? `${API_URL}/api/auth/login`
  : `${API_URL}/api/auth/register`;

    const body = isLogin
      ? { email, password }
      : { name, email, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        if (isLogin) {
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
        } else {
          alert("Account created successfully. Please login.");
          setIsLogin(true);
        }
      }
    } catch {
      setError("Server not responding");
    }
  };

  const sendResetLink = async () => {
    setForgotMsg("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: forgotEmail }),
        }
      );

      const data = await res.json();
      setForgotMsg(data.message || "Email sent");

      if (res.ok) {
        setTimeout(() => {
          setShowForgot(false);
          setForgotEmail("");
          setForgotMsg("");
        }, 2500);
      }
    } catch {
      setForgotMsg("Server error");
    }
  };

  return (
    <div className="page">
<Link to="/" className="logo">
  <img src="/logo.png" alt="ASAT Automation" />
  
</Link>
      <h2 className="welcome">{isLogin ? "Welcome Back" : "Create Account"}</h2>

      <p className="subtitle">
        {isLogin
          ? "Sign in to your ASAT account"
          : "Join ASAT Automation to access exclusive features"}
      </p>

      <div className="card">
        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="field">
              <label>Full Name</label>
              <input
                placeholder="Rohan Joshi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isLogin && (
            <div className="options">
              <span className="link" onClick={() => setShowForgot(true)}>
                Forgot password?
              </span>
            </div>
          )}

          <button className="button">
            {isLogin ? "Sign In" : "Create Account"}
          </button>

          <div className="switch">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <span className="link" onClick={() => setIsLogin(false)}>
                  Create Account
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="link" onClick={() => setIsLogin(true)}>
                  Sign In
                </span>
              </>
            )}
          </div>
        </form>
      </div>

     

      {/* Forgot Password Popup */}
      {showForgot && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span className="close" onClick={() => setShowForgot(false)}>
              ✕
            </span>

            <h3>Forgot Password</h3>

            <input
              type="email"
              placeholder="Enter your email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              className="Finput"
            />

            <button onClick={sendResetLink}>Send Reset Link</button>

            {forgotMsg && <p className="success">{forgotMsg}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default login;
