import { useEffect, useState } from "react";
import { getMyOrders } from "../../api/orderApi";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getMyOrders();
      setOrders(res);
    };
    fetch();
  }, []);

  return (
    <div className="bg-[#0f021e] text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">📦 My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-[#1e1b3a] p-4 rounded">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Order ID: {order._id}</span>
                <span className={order.status === "completed" ? "text-green-400" : "text-yellow-400"}>{order.status === "completed" ? "Completed" : "Pending Confirmation"}</span>
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold mb-1">Games:</p>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {order.products.map((game) => (
                    <li key={game._id}>{game.name}</li>
                  ))}
                </ul>
              </div>
              {order.products.map((game) => (
                <div key={game._id} className="mb-2">
                  <p>{game.name}</p>

                  {order.status === "completed" && (
                    <a href={`/review/${game._id}`} className="text-sm text-pink-400 hover:underline">
                      ✍️ Write a Review
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
