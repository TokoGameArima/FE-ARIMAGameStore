import { useEffect, useState } from "react";
import { getAllOrders } from "../../api/orderApi";
import { useNavigate } from "react-router-dom";

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllOrders();
      setOrders(res);
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f021e] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">📋 All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-[#1e1b3a] p-4 rounded cursor-pointer hover:bg-[#292447]" onClick={() => navigate(`/admin/orders/${order._id}`)}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Order ID: {order._id}</p>
                  <p>User: {order.user_id.username}</p>
                  <p>
                    Status: <span className={order.status === "completed" ? "text-green-400" : "text-yellow-400"}>{order.status}</span>
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
