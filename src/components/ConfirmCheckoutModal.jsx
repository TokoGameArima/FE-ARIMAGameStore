import { useNavigate } from "react-router-dom";

const ConfirmCheckoutModal = ({ isOpen, onClose, cartItems }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleProcess = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    onClose();
    navigate("/dashboard/cart");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#1e1b3a] p-6 rounded-lg w-full max-w-2xl text-white relative">
        <button className="absolute text-xl top-2 right-4" onClick={onClose}>
          ✕
        </button>
        <h2 className="mb-4 text-2xl font-bold">Confirm Your Order</h2>
        <div className="space-y-4 max-h-[50vh] overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-[#2a2740] p-3 rounded">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="object-cover w-12 h-12 rounded" />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-400">Rp{item.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleProcess} className="w-full py-2 mt-6 font-semibold bg-pink-600 rounded hover:bg-pink-700">
          Process to Checkout
        </button>
      </div>
    </div>
  );
};

export default ConfirmCheckoutModal;
