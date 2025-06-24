import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0220] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold"><span className="bg-pink-600 text-white px-2 rounded-full">ARIMA</span> GAME STORE</h3>
          <p className="text-sm text-gray-400 mt-2">
            Toko game digital terbaik sejak 2025.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center">
          &copy; 2025{currentYear > 2025 ? `—${currentYear}` : ""} <strong>ARIMA</strong> Game Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
