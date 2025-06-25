import { Link, useNavigate, useLocation } from "react-router-dom";
import { Gamepad2, ShoppingBasket, Menu, X, LayoutDashboard, Package, Tag, Users, CircleUserRound as UserIcon, ArrowLeft } from "lucide-react";
import { useState } from "react";

const Sidebar = ({ role }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <button onClick={toggleSidebar} className="fixed top-4 left-4 z-[999] p-2 bg-[#15003a] text-white rounded-lg md:hidden hover:bg-purple-600 transition">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar} />}

      <aside
        className={`
          fixed md:static top-0 left-0
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
            {role === "admin" ? (
              <>
                <Link
                  to="/admin"
                  className={`flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600 ${
                    isActive("/admin") ? "bg-purple-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <LayoutDashboard size={18} /> Dashboard
                </Link>
                <Link
                  to="/admin/orders"
                  className={`flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600 ${
                    isActive("/admin/orders") ? "bg-purple-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingBasket size={18} /> Orders
                </Link>
                <Link
                  to="/admin/products"
                  className={`flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600 ${
                    isActive("/admin/products") ? "bg-purple-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Package size={18} /> Products
                </Link>
                <Link
                  to="/admin/categories"
                  className={`flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600 ${
                    isActive("/admin/categories") ? "bg-purple-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Tag size={18} /> Categories
                </Link>
                <Link
                  to="/admin/developers"
                  className={`flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600 ${
                    isActive("/admin/developers") ? "bg-purple-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Users size={18} /> Developers
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/games"
                  className={`flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600 ${
                    isActive("/games") ? "bg-purple-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Gamepad2 size={18} /> Browse Games
                </Link>
                <Link
                  to="/cart"
                  className={`flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600 ${
                    isActive("/cart") ? "bg-purple-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingBasket size={18} /> My Cart
                </Link>
                <Link
                  to="/orders"
                  className={`flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600 ${
                    isActive("/orders") ? "bg-purple-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Package size={18} /> Order History
                </Link>
                <Link
                  to="/profile"
                  className={`flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600 ${
                    isActive("/profile") ? "bg-purple-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <UserIcon size={18} /> My Profile
                </Link>
              </>
            )}
          </nav>
        </div>
        <div className="h-fit flex flex-col gap-4">
          <button
            onClick={() => navigate("/")}
            className="block w-full border-2 border-[#f93cff] text-white px-6 py-2 rounded-full font-bold transition hover:opacity-90 hover:bg-[#f93cff]/20"
          >
            <ArrowLeft size={18} className="inline-block mr-2" />
            Back Home
          </button>
          <button onClick={handleLogout} className="py-2 font-semibold text-white transition rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
            🚪 Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
