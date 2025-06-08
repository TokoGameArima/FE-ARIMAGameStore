import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0a0025] text-white">
      <div className="flex items-center space-x-2">
        <img src="/images/LogoArima.png" alt="Logo" className="h-12" />
      </div>
      <ul className="hidden md:flex space-x-6 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/match">Match</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Link
        to="/register"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition"
      >
        Sign Up →
      </Link>
    </nav>
  );
}

export default Navbar;
