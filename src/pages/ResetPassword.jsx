import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/reset-password/${token}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newPassword: password }),
  }
);

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid or expired token");
        setLoading(false);
        return;
      }

      // ✅ SUCCESS
      setSuccess(true);

      // ⏳ Redirect after 3 seconds
     
    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {!success ? (
          <>
            <h2>Reset Password</h2>

            <div className="field">
              <label>New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="Finput"
                
              />
            </div>

            <button className="btn" onClick={handleReset} disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        ) : (
          <>
            <h2>Password Changed Successfully</h2>
            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Your password has been updated successfully.
            </p>
            <p style={{ textAlign: "center", marginTop: "10px", color: "#666" }}>
             Please login again with your new password.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
