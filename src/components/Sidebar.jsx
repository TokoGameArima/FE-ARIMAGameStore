import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, ShoppingBasket } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-[#15003a] text-white flex flex-col justify-between p-6">
      <div>
        <div className="flex justify-center">
          <img src="/images/LogoArima.png" alt="Logo" className="h-12" />
        </div>
        <nav className="mt-6 space-y-4">
          <Link to="/dashboard/gamelist" className="flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600">
            <Gamepad2 size={18} /> Game List
          </Link>
          <Link to="/dashboard/cart" className="flex items-center gap-2 px-4 py-2 transition rounded hover:bg-purple-600">
            <ShoppingBasket size={18} /> Cart
          </Link>
        </nav>
      </div>

      <button onClick={handleLogout} className="py-2 mt-10 font-semibold text-white transition rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
        🚪 Logout
      </button>
    </aside>
  );
};

export default Sidebar;
