import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password });
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      const role = res.user?.role;
      if (role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/games");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
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
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-required="true"
          />
          <button type="submit" className="w-full py-2 font-bold text-white transition rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105" aria-label="Login">
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
