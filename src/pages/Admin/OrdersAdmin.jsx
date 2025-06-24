import { useEffect, useState } from "react";
import { getAllOrders } from "../../api/orderApi";
import { useNavigate } from "react-router-dom";

const OrdersAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await getAllOrders();
      setOrders(res);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f021e] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">📋 All Orders</h1>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-[#1e1b3a] p-4 rounded cursor-pointer hover:bg-[#292447]" onClick={() => navigate(`/admin/orders/${order._id}`)}>
              <div className="flex flex-wrap justify-between items-center gap-3">
                <div>
                  <p className="text-sm text-gray-400">Order ID: {order._id}</p>
                  <p>User : <strong>{order.user_id.username}</strong></p>
                  <p>
                    Status : <span className={order.status === "completed" ? "text-green-400" : "text-yellow-400"}>{order.status}</span>
                  </p>
                </div>
                <p className="font-bold">🕒 {new Date(order.createdAt).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersAdmin;
