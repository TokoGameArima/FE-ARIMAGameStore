import React from "react";
import { Gamepad2, BadgeCheck, DollarSign } from "lucide-react";

const features = [
  {
    icon: <BadgeCheck size={32} className="text-[#f93cff]" />,
    title: "Game Original",
    desc: "Semua game dijamin original & resmi dari publisher tepercaya.",
  },
  {
    icon: <Gamepad2 size={32} className="text-[#ffa9f9]" />,
    title: "Update Terbaru",
    desc: "Game terbaru selalu tersedia dan bisa langsung kamu mainkan.",
  },
  {
    icon: <DollarSign size={32} className="text-[#34d399]" />,
    title: "Harga Terbaik",
    desc: "Promo dan diskon menarik setiap minggunya, hanya di sini.",
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-[#120328] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Kenapa Belanja Game di Sini?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c0636] p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition duration-300"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
