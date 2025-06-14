import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { createOrder } from "../../api/orderApi";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [proofUrl, setProofUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!paymentMethod || cartItems.length === 0) {
      alert("Please select payment method and have at least one game in cart.");
      return;
    }

    const payload = {
      products: cartItems.map((item) => item._id),
      payment_method: paymentMethod,
      proof: proofUrl || null,
    };

    try {
      await createOrder(payload);
      clearCart();
      navigate("/orders");
    } catch (err) {
      console.error(err);
      alert("Failed to submit order.");
    }
  };

  return (
    <div className="bg-[#0f021e] text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="bg-[#1e1b3a] p-4 rounded flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">Rp {item.price},-</p>
                </div>
                <button onClick={() => removeFromCart(item._id)} className="text-red-400 hover:text-red-600">
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <label className="block mb-2">Payment Method</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="bg-[#1e1b3a] w-full px-4 py-2 rounded">
              <option value="">-- Select --</option>
              <option value="OVO">OVO</option>
              <option value="BCA">BCA</option>
              <option value="DANA">DANA</option>
              <option value="ShopeePay">ShopeePay</option>
              <option value="QRIS">QRIS</option>
            </select>

            <label className="block mt-6 mb-2">Upload Proof of Payment (Optional)</label>
            <input type="text" placeholder="Paste image URL (e.g., https://imgur.com/xxx)" value={proofUrl} onChange={(e) => setProofUrl(e.target.value)} className="w-full px-4 py-2 bg-[#1e1b3a] text-white rounded" />

            <button className="mt-6 bg-green-600 hover:bg-green-700 w-full py-2 rounded text-white" onClick={handleSubmit}>
              Submit Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
