import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

function NavbarButton() {
  const [buttonText, setButtonText] = useState("Login");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setButtonText("Browse Games");
    } else {
      setButtonText("Login");
    }
  }, []);

  return (
    <Link
      to={buttonText === "Login" ? "/login" : "/games"}
      className={`w-full md:w-fit px-4 py-2 text-lg md:text-sm text-white text-center transition rounded-full shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105`}
    >
      <span>{buttonText}</span>
      <ArrowRight size={16} className="inline ml-1" />
    </Link>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#0a0025] text-white px-6 py-4">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center space-x-2">
          <img src="/images/LogoArima.png" alt="Logo" className="h-12" />
        </div>

        <ul className="hidden space-x-6 font-medium md:flex">
          <li>
            <Link
              to="/"
              className={`hover:underline hover:underline-offset-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 ${
                isActive("/") ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className={`hover:underline hover:underline-offset-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 ${
                isActive("/faq") ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" : ""
              }`}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:underline hover:underline-offset-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 ${
                isActive("/contact") ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden font-bold md:block">
        <NavbarButton />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`flex flex-col gap-4 items-start pt-8 pb-4 font-medium md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className={`w-full rounded-lg p-4 hover:text-[#0a0025] hover:bg-white ${
            isActive("/") ? "text-[#0a0025] bg-white" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/faq"
          onClick={() => setIsOpen(false)}
          className={`w-full rounded-lg p-4 hover:text-[#0a0025] hover:bg-white ${
            isActive("/faq") ? "text-[#0a0025] bg-white" : ""
          }`}
        >
          FAQ
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={`w-full rounded-lg p-4 hover:text-[#0a0025] hover:bg-white ${
            isActive("/contact") ? "text-[#0a0025] bg-white" : ""
          }`}
        >
          Contact Us
        </Link>
        <NavbarButton />
      </div>
    </nav>
  );
}

export default Navbar;
