import { useEffect, useState } from "react";
import { getAllOrders, verifyOrder } from "../../api/orderApi";
import { useParams, useNavigate } from "react-router-dom";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [showProofModal, setShowProofModal] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const all = await getAllOrders();
      const selected = all.find((o) => o._id === id);
      if (!selected) return navigate("/admin/orders");
      setOrder(selected);
    };
    fetch();
  }, [id, navigate]);

  const handleVerify = async () => {
    try {
      await verifyOrder(id);
      alert("Order verified!");
      navigate("/admin/orders");
    } catch (err) {
      alert("Failed to verify order.");
    }
  };

  if (!order) return <p className="text-white p-6">Loading order...</p>;

  return (
    <div className="min-h-screen bg-[#0f021e] text-white p-6 relative">
      <h1 className="text-2xl font-bold mb-6">📝 Order Detail</h1>

      <div className="bg-[#1e1b3a] p-4 rounded space-y-2">
        <p>
          <strong>Order ID:</strong> {order._id}
        </p>
        <p>
          <strong>User:</strong> {order.user_id.username}
        </p>
        <p>
          <strong>Status:</strong> {order.status}
        </p>
        <p>
          <strong>Payment Method:</strong> {order.payment_method}
        </p>
        <p>
          <strong>Total Price:</strong> Rp{order.total_price},-
        </p>

        <p className="mt-2 font-semibold">Games:</p>
        <ul className="list-disc list-inside text-sm text-gray-300">
          {order.products.map((game) => (
            <li key={game._id}>{game.name}</li>
          ))}
        </ul>

        <div>
          <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded text-white" onClick={() => setShowProofModal(true)}>
            📎 Show Proof of Payment
          </button>
        </div>

        {order.status === "pending" && (
          <button onClick={handleVerify} className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
            ✅ Mark as Paid
          </button>
        )}
      </div>

      {showProofModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#1e1b3a] p-6 rounded shadow-lg max-w-lg w-full text-center relative">
            <button onClick={() => setShowProofModal(false)} className="absolute top-2 right-4 text-white text-2xl">
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Proof of Payment</h2>
            <img src={order.proof && order.proof.trim() !== "" ? order.proof : "https://i.imgur.com/qsK0w2R.jpeg"} alt="Proof" className="w-full max-h-[400px] object-contain rounded border border-gray-600" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
