import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, ShoppingBasket, Menu, X, LayoutDashboard } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 p-2 bg-[#15003a] text-white rounded-lg md:hidden hover:bg-purple-600 transition">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar} />}

      <aside
        className={`
          fixed md:static
          top-0 left-0
          w-64 h-full
          bg-[#15003a] text-white
          flex flex-col justify-between p-6
          transform transition-transform duration-300 ease-in-out
          z-50 md:z-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div>
          <div className="flex justify-center">
            <img src="/images/LogoArima.png" alt="Logo" className="h-12" />
          </div>
          <nav className="mt-6 space-y-4">
            <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600" onClick={() => setIsOpen(false)}>
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <Link to="/dashboard/gamelist" className="flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600" onClick={() => setIsOpen(false)}>
              <Gamepad2 size={18} /> Game List
            </Link>
            <Link to="/dashboard/cart" className="flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600" onClick={() => setIsOpen(false)}>
              <ShoppingBasket size={18} /> Cart
            </Link>
          </nav>
        </div>
        <button onClick={handleLogout} className="py-2 mt-10 font-semibold text-white transition rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
          🚪 Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
