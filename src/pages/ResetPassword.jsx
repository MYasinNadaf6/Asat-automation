import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      // Using axios to match your other ASAT components
      const res = await axios.post(`https://asat-backend.onrender.com/api/auth/reset-password/${token}`, 
        { newPassword: password }
      );

      // ✅ SUCCESS
      setSuccess(true);
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch (err) {
      console.error("Reset Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Invalid or expired token");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#3a003a] to-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center">
        
        {/* ASAT Brand Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-white tracking-widest uppercase">| ASAT</h1>
          <p className="text-amber-500 text-[10px] font-bold mt-2 uppercase tracking-widest">Secure credentials reset</p>
        </div>

        {!success ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-6">Reset Password</h2>

            <form onSubmit={handleReset} className="w-full space-y-6">
              <div className="space-y-2">
                <label className="text-zinc-400 text-xs font-bold uppercase ml-2 tracking-wider">New Password</label>
                <input
                  type="password"
                  placeholder="Enter at least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 bg-zinc-900 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-blue-600 transition"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl font-bold text-lg shadow-lg transform active:scale-95 transition"
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Success!</h2>
            <p className="text-zinc-400">Your password has been updated. Redirecting you to login...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;