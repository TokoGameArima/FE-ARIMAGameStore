import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productApi";
import { getCategories } from "../../api/categoryApi";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const GamesPage = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([{ _id: "all", category_name: "All" }]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const [gameRes, catRes] = await Promise.all([getAllProducts(), getCategories()]);
      setGames(gameRes);
      setCategories([{ _id: "all", category_name: "All" }, ...catRes]);
    };
    fetchData();
  }, []);

  const filteredGames = games.filter((game) => {
    const matchCategory = selectedCategory === "All" || game.categories_id?.category_name === selectedCategory;
    const matchSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-[#0f021e] text-white min-h-screen p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input type="text" placeholder="Search games..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-[#1e1b3a] rounded px-4 py-2 w-full md:w-1/2" />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="bg-[#1e1b3a] rounded px-4 py-2 w-full md:w-1/3">
          {categories.map((cat) => (
            <option key={cat._id} value={cat.category_name}>
              {cat.category_name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <div key={game._id} className="bg-[#1e1b3a] p-4 rounded">
            <img src={game.pictures || "/images/placeholder.png"} alt={game.name} className="w-full h-40 object-cover rounded mb-2" />
            <h2 className="font-bold text-lg">{game.name}</h2>
            <p className="text-sm text-gray-400 mb-2 line-clamp-2">{game.description}</p>
            <p className="text-pink-400 font-semibold mb-3">Rp {game.price},-</p>
            <button onClick={() => addToCart(game)} className="w-full bg-pink-600 hover:bg-pink-700 rounded py-2" disabled={cartItems.some((item) => item._id === game._id)}>
              {cartItems.some((item) => item._id === game._id) ? "Added" : "Add to Cart"}
            </button>
            <Link to={`/games/${game._id}/reviews`} className="text-sm text-indigo-400 hover:underline mt-2 block">
              View Reviews
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
