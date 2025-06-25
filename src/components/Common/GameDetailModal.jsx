import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";

const GameDetailModal = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-[#1e1b3a] text-white p-6 rounded-lg max-w-md w-full relative shadow-xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-300 hover:text-white text-xl"
          >
            ✕
          </button>
          <img
            src={game.pictures || "/images/placeholder.png"}
            alt={game.name}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{game.name}</h2>
          <p className="text-sm text-gray-300 mb-2">{game.description}</p>
          {game.categories_id?.category_name && (
            <p className="text-sm mb-2">
              <span className="text-gray-400">Category: </span>
              <span className="text-indigo-400">
                {game.categories_id.category_name}
              </span>
            </p>
          )}
          <p className="text-pink-400 font-bold text-lg mb-3">
            Rp{game.price.toLocaleString()},-
          </p>
          <Link
            to={`/games/${game._id}/reviews`}
            onClick={(e) => {
              e.stopPropagation();
              onClose(); // Tutup modal saat klik link
            }}
            className="text-indigo-400 hover:underline text-sm"
          >
          <span>See Reviews and Comments</span>
          <ArrowRight size={16} className="inline ml-1" />
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameDetailModal;
