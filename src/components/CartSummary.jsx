const CartSummary = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full lg:w-1/3 bg-[#1e1b3a] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rp{total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between"></div>
        <hr className="my-2 border-gray-600" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>Rp{total.toLocaleString()}</span>
        </div>
      </div>
      <button className="w-full mt-6 py-3 rounded bg-gradient-to-r from-pink-500 to-purple-600 font-semibold hover:opacity-90">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
