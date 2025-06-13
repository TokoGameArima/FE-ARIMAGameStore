import { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";
import axios from "axios";

const CartPage = () => {
  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleNext = async () => {
    if (step === 2) {
      try {
        for (const item of cartItems) {
          await axios.post("http://localhost:5000/api/orders", {
            game_id: item.id,
          });
        }
        localStorage.removeItem("cartItems");
        setCartItems([]);
      } catch (err) {
        console.error("Error placing order:", err);
        return;
      }
    }

    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-[#0a0025] text-white px-4 md:px-20 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <div className="flex justify-center mt-4 space-x-6 text-sm">
          <div className={`pb-1 ${step === 1 ? "border-b-2 border-pink-500 font-semibold" : "text-gray-400"}`}>1. Cart Review</div>
          <div className={`pb-1 ${step === 2 ? "border-b-2 border-pink-500 font-semibold" : "text-gray-400"}`}>2. Payment</div>
          <div className={`pb-1 ${step === 3 ? "border-b-2 border-pink-500 font-semibold" : "text-gray-400"}`}>3. Success</div>
        </div>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1 space-y-6">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="w-full lg:w-1/3 bg-[#1e1b3a] p-6 rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Cart Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp{total.toLocaleString()}</span>
              </div>
              <hr className="my-2 border-gray-600" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>Rp{total.toLocaleString()}</span>
              </div>
            </div>
            <button onClick={handleNext} className="w-full py-3 mt-6 font-semibold rounded bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
              Proceed to Payment
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-xl mx-auto bg-[#1e1b3a] p-8 rounded-lg">
          <h2 className="mb-6 text-xl font-semibold">Choose Payment Method</h2>
          <div className="space-y-4">
            <div className="bg-[#2a2740] p-4 rounded">Wallet (Mocked)</div>
            <div className="bg-[#2a2740] p-4 rounded">Virtual Account (Mocked)</div>
          </div>
          <div className="flex justify-between mt-8">
            <button onClick={handleBack} className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700">
              Back
            </button>
            <button onClick={handleNext} className="px-4 py-2 bg-pink-600 rounded hover:bg-pink-700">
              Pay Now
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h2 className="mb-4 text-3xl font-bold text-green-400">Payment Successful ✅</h2>
          <p className="text-gray-400">Your order has been placed successfully!</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
