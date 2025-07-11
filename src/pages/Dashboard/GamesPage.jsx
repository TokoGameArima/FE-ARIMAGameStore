import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productApi";
import { getCategories } from "../../api/categoryApi";
import { useCart } from "../../context/CartContext";
import Pagination from "../../components/Common/Pagination";
import GameDetailModal from "../../components/Common/GameDetailModal";

import { Link } from "react-router-dom";

const GamesPage = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([
    { _id: "all", category_name: "All" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart, cartItems } = useCart();

  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 6;

  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const openModal = (game) => setSelectedGame(game);
  const closeModal = () => setSelectedGame(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      const [gameRes, catRes] = await Promise.all([
        getAllProducts(),
        getCategories(),
      ]);
      setGames(gameRes);
      setCategories([{ _id: "all", category_name: "All" }, ...catRes]);
      setLoading(false); // Set loading to false after fetching
    };
    fetchData();
  }, []);

  const filteredGames = games.filter((game) => {
    const matchCategory =
      selectedCategory === "All" ||
      game.categories_id?.category_name === selectedCategory;
    const matchSearch = game.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  // Reset ke halaman 1 kalau filter/search berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-[#0f021e] text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">🎮 Browse Games</h1>
      {/* Filter Search + Kategori */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#1e1b3a] rounded px-4 py-2 w-full md:w-1/2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-[#1e1b3a] rounded px-4 py-2 w-full md:w-1/3"
        >
          {categories.map((cat) => (
            <option key={cat._id} value={cat.category_name}>
              {cat.category_name}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-lg">Loading games...</p>
      ) : (
        <>
          {/* Game Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentGames.map((game) => (
              <div
                key={game._id}
                onClick={() => setSelectedGame(game)}
                className="bg-[#1e1b3a] p-4 rounded cursor-pointer hover:scale-[1.01] transition"
              >
                <img
                  src={game.pictures || "/images/placeholder.png"}
                  alt={game.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h2 className="font-bold text-lg">{game.name}</h2>
                <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                  {game.description}
                </p>
                <p className="text-pink-400 font-semibold mb-3">
                  Rp{game.price},-
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(game);
                  }}
                  className="w-full bg-pink-600 hover:bg-pink-700 rounded py-2"
                  disabled={cartItems.some((item) => item._id === game._id)}
                >
                  {cartItems.some((item) => item._id === game._id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
                <Link
                  to={`/games/${game._id}/reviews`}
                  className="text-sm text-indigo-400 hover:underline mt-2 block"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Reviews
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}

      <GameDetailModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </div>
  );
};

export default GamesPage;
