import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api";

import { Eye, EyeOff, ArrowRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await login({ username, password });
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      const role = res.user?.role;
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/games");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Invalid credentials. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center gap-20 px-4 mt-10 md:flex-row">
        <img src="/images/LogoArima.png" alt="gamer logo" className="w-64 h-64" />
        <form className="bg-[#15003a] p-8 rounded-lg w-full max-w-sm shadow-lg space-y-4" onSubmit={handleLogin}>
          <h3 className="mb-4 text-2xl font-semibold text-center text-white">LOGIN</h3>
          {error && (
            <div className="text-sm text-center text-red-400" role="alert">
              {error}
            </div>
          )}
          <input
            id="username"
            type="text"
            placeholder="Username or Email"
            className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-required="true"
          />
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-required="true"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-purple-300"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button type="submit" className="w-full py-2 font-bold text-white transition rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105" aria-label="Login">
            <span>Login</span>
            <ArrowRight size={16} className="inline ml-1" />
          </button>
          <p className="mt-4 text-sm text-center text-white">
            Do not have any account?{" "}
            <Link to="/register" className="text-yellow-400 hover:underline">
              Register here
            </Link>
          </p> 
        </form>
      </div>
    </div>
  );
}

export default Login;
