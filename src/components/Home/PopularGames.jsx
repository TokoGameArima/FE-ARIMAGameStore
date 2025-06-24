import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../api"; // ⬅️ make sure the path is correct

const PopularGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomGames = async () => {
      const all = await getAllProducts();
      const shuffled = all.sort(() => 0.5 - Math.random());
      const random4 = shuffled.slice(0, 4);
      setGames(random4);
    };
    fetchRandomGames();
  }, []);

  return (
    <section className="bg-[#0f021e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Most Popular Games This Week</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {games.map((game) => (
            <div key={game._id} className="bg-[#1a0833] rounded-xl overflow-hidden shadow-lg hover:shadow-[#f93cff]/30 transition cursor-pointer" onClick={() => navigate(`/games/${game._id}`)}>
              <img src={game.pictures || "/images/default.jpg"} alt={game.name} className="w-full h-52 object-cover" />

              <div className="p-4 text-left space-y-1">
                <h3 className="text-lg font-semibold">{game.name}</h3>
                <p className="text-sm text-pink-400">{game.categories_id?.category_name || "-"}</p>
                <p className="text-sm text-gray-300">{game.developer_id?.developer_name || "-"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
