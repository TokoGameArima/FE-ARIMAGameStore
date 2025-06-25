import React from "react";
import { Gamepad2, BadgeCheck, DollarSign } from "lucide-react";

const features = [
  {
    icon: <BadgeCheck size={32} className="text-[#f93cff]" />,
    title: "Original Games",
    desc: "All games are guaranteed to be original & officially from trusted publishers.",
  },
  {
    icon: <Gamepad2 size={32} className="text-[#ffa9f9]" />,
    title: "Latest Updates",
    desc: "The latest games are always available and ready for you to play.",
  },
  {
    icon: <DollarSign size={32} className="text-[#34d399]" />,
    title: "Best Prices",
    desc: "Exciting promos and discounts every week, only here.",
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-[#120328] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold mb-12">
          Why Shop for Games Here?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              data-aos="zoom-in"
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
