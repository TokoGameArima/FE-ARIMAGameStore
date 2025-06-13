import React from "react";
import CartItem from "../../components/CartItem";
import CartSummary from "../../components/CartSummary";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Cyber Ball",
      price: 190000,
      image: "/images/CyberReign.png",
    },
    {
      id: 2,
      name: "Try Cyber",
      price: 190000,
      image: "/images/CyberReign.png",
    },
    {
      id: 3,
      name: "Table Cyber",
      price: 390000,
      image: "/images/CyberReign.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0025] text-white px-4 md:px-20 py-10">
      <h1 className="mb-8 text-3xl font-bold text-center">🛒 Your Cart</h1>

      {/* Step Indicator */}
      <div className="flex justify-center mb-10 space-x-10 text-sm text-center">
        <div className="pb-1 font-semibold border-b-2 border-pink-500">1. Shopping cart</div>
        <div className="text-gray-500">2. Checkout details</div>
        <div className="text-gray-500">3. Order complete</div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left: Cart Items */}
        <div className="flex-1 space-y-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Right: Summary */}
        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
