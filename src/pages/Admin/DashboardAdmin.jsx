import { useEffect, useState } from "react";
import { getAllProducts } from "../../api";
import { getAllOrders } from "../../api/orderApi";
import { getAllUsers } from "../../api/userApi";

const DashboardAdmin = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const products = await getAllProducts();
    setProducts(products);
    const orders = await getAllOrders();
    setOrders(orders);
    const users = await getAllUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchData();
  });

  const mockStats = {
    totalGames: products.length ?? 0,
    totalOrders: orders.length ?? 0,
    activeUsers: users.length ?? 0,
  };

  return (
    <div className="min-h-screen text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="relative p-8 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center mb-4 gap-4">
              <div className="flex items-center justify-center w-12 h-12 text-2xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">🎮</div>
              <div>
                <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">Admin Dashboard</h1>
                <p className="text-sm md:text-base mt-1 text-gray-400">Only accessible when logged in as an admin 🔐</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
            <div className="relative group">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-75 bg-gradient-to-r from-purple-600/30 to-purple-800/30 rounded-2xl blur-lg group-hover:opacity-100"></div>
              <div className="relative bg-[#1e1b3a]/80 backdrop-blur-sm border border-purple-500/20 p-8 rounded-2xl hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center justify-center text-2xl shadow-lg w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">🎯</div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-purple-400">TOTAL</div>
                  </div>
                </div>
                <h2 className="mb-3 text-xl font-semibold text-gray-200">Games in Store</h2>
                <p className="mb-2 text-4xl font-bold text-purple-400">{mockStats.totalGames}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-gray-400">Available for purchase</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-75 bg-gradient-to-r from-pink-600/30 to-pink-800/30 rounded-2xl blur-lg group-hover:opacity-100"></div>
              <div className="relative bg-[#1e1b3a]/80 backdrop-blur-sm border border-pink-500/20 p-8 rounded-2xl hover:border-pink-500/40 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center justify-center text-2xl shadow-lg w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl">📦</div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-pink-400">TOTAL</div>
                  </div>
                </div>
                <h2 className="mb-3 text-xl font-semibold text-gray-200">Orders Completed</h2>
                <p className="mb-2 text-4xl font-bold text-pink-400">{mockStats.totalOrders}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-gray-400">Successful purchases</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 transition-opacity duration-300 opacity-75 bg-gradient-to-r from-green-600/30 to-green-800/30 rounded-2xl blur-lg group-hover:opacity-100"></div>
              <div className="relative bg-[#1e1b3a]/80 backdrop-blur-sm border border-green-500/20 p-8 rounded-2xl hover:border-green-500/40 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center justify-center text-2xl shadow-lg w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">👥</div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-400">ACTIVE</div>
                  </div>
                </div>
                <h2 className="mb-3 text-xl font-semibold text-gray-200">Players Online</h2>
                <p className="mb-2 text-4xl font-bold text-green-400">{mockStats.activeUsers}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-gray-400">Playing this week</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold text-gray-200">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <button className="bg-[#1e1b3a]/60 border border-gray-700/50 p-4 rounded-xl hover:border-purple-500/50 transition-all duration-200 group">
                <div className="mb-2 text-2xl transition-transform group-hover:scale-110">📊</div>
                <div className="text-sm text-gray-300">View Reports</div>
              </button>
              <button className="bg-[#1e1b3a]/60 border border-gray-700/50 p-4 rounded-xl hover:border-pink-500/50 transition-all duration-200 group">
                <div className="mb-2 text-2xl transition-transform group-hover:scale-110">➕</div>
                <div className="text-sm text-gray-300">Add Game</div>
              </button>
              <button className="bg-[#1e1b3a]/60 border border-gray-700/50 p-4 rounded-xl hover:border-green-500/50 transition-all duration-200 group">
                <div className="mb-2 text-2xl transition-transform group-hover:scale-110">👤</div>
                <div className="text-sm text-gray-300">Manage Users</div>
              </button>
              <button className="bg-[#1e1b3a]/60 border border-gray-700/50 p-4 rounded-xl hover:border-yellow-500/50 transition-all duration-200 group">
                <div className="mb-2 text-2xl transition-transform group-hover:scale-110">⚙️</div>
                <div className="text-sm text-gray-300">Settings</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
