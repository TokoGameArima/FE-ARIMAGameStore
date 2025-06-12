import React from "react";

const Card = ({ game, onClick, onAddToCart }) => {
  return (
    <div
      className="group bg-[#1e1b3a] rounded-xl overflow-hidden shadow-lg shadow-black/20 
                 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] 
                 transition-all duration-300 ease-out cursor-pointer
                 border border-[#2d2a4a] hover:border-purple-500/30
                 aspect-[3/4] flex flex-col"
      onClick={() => onClick(game)}
    >
      <div className="relative overflow-hidden flex-[3]">
        <img src={game.image} alt={game.title} className="object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-100" />
      </div>
      <div className="flex-[2] p-3 flex flex-col justify-between">
        <div>
          <h3 className="mb-1 text-sm font-semibold text-white transition-colors duration-200 sm:text-base line-clamp-2 group-hover:text-purple-200">{game.title}</h3>

          <p className="text-xs font-medium text-gray-400 sm:text-sm">Rp{game.price.toLocaleString()}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(game);
          }}
          className="mt-2 text-xs font-medium text-left text-pink-400 transition-colors duration-200 sm:text-sm hover:text-white hover:underline"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
