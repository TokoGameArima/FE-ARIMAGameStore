import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center gap-20 px-4 mt-10 md:flex-row">
        <img src="/images/LogoArima.png" alt="gamer" className="w-64 h-64" />

        <form className="bg-[#15003a] p-8 rounded-lg w-full max-w-sm shadow-lg space-y-4" onSubmit={handleLogin}>
          <h3 className="mb-4 text-2xl font-semibold text-center text-white">LOGIN</h3>

          {error && <div className="text-sm text-center text-red-400">{error}</div>}

          <input type="username" placeholder="E-mail" className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300" value={username} onChange={(e) => setUsername(e.target.value)} />

          <input type="password" placeholder="Password" className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="w-full py-2 font-bold text-white transition rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105">
            Login →
          </button>

          <p className="mt-4 text-sm text-center text-white">
            Do not have any account?{" "}
            <Link to="/register" className="text-yellow-400 hover:underline">
              Signup here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
