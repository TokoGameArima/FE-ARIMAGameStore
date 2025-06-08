import React from "react";

const games = [
  {
    id: 1,
    title: "Elden Ring",
    image: "/images/CyberReign.png",
    price: "Rp 699.000",
  },
  {
    id: 2,
    title: "Call of Duty: MW2",
    image: "/images/CyberReign.png",
    price: "Rp 849.000",
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    image: "/images/CyberReign.png",
    price: "Rp 599.000",
  },
  {
    id: 4,
    title: "Hogwarts Legacy",
    image: "/images/CyberReign.png",
    price: "Rp 759.000",
  },
];

const PopularGames = () => {
  return (
    <section className="bg-[#0f021e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Game Populer Minggu Ini
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-[#1a0833] rounded-xl overflow-hidden shadow-lg hover:shadow-[#f93cff]/30 transition"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                <p className="text-pink-400 font-bold">{game.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
