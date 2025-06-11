import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-10 px-4">
        <img src="/images/LogoArima.png" alt="Logo Arima" className="w-64 h-64" />

        <form
          className="bg-[#15003a] p-8 rounded-lg w-full max-w-sm shadow-lg space-y-4"
          aria-labelledby="signup-heading"
        >
          <h3
            id="signup-heading"
            className="text-2xl font-semibold mb-4 text-white text-center"
          >
            SIGN UP
          </h3>

          <input
            id="username"
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300"
            aria-required="true"
          />
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300"
            aria-required="true"
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300"
            aria-required="true"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-bold hover:scale-105 transition"
            aria-label="Register"
          >
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
