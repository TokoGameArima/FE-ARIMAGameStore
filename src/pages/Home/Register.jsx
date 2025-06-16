import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../api";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register({ username, password, role: "user" });
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Try a different username.");
    }
  };

  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-10 px-4">
        <img src="/images/LogoArima.png" alt="Logo Arima" className="w-64 h-64" />
        <form className="bg-[#15003a] p-8 rounded-lg w-full max-w-sm shadow-lg space-y-4" onSubmit={handleRegister}>
          <h3 className="text-2xl font-semibold mb-4 text-white text-center">SIGN UP</h3>
          {error && (
            <div className="text-sm text-center text-red-400" role="alert">
              {error}
            </div>
          )}
          <input
            id="username"
            type="text"
            placeholder="Username"
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
          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-bold hover:scale-105 transition" aria-label="Register">
            Register →
          </button>
          <p className="text-sm text-center mt-4 text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-400 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
