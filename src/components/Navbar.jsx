import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a0025] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/LogoArima.png" alt="Logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gamelist">Game List</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Sign Up Button */}
        <div className="hidden md:block">
          <Link
            to="/register"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition"
          >
            Sign Up →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 font-medium flex flex-col items-start">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/gamelist" onClick={() => setIsOpen(false)}>
            Game List
          </Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            Cart
          </Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-sm shadow"
          >
            Sign Up →
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
