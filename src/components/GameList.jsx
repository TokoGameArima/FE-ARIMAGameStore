import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function GameList({ onGameClick }) {
  const [categories, setCategories] = useState([{ category_name: "All" }]);
  const [games, setGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories([{ category_name: "All" }, ...res.data]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        const mappedGames = res.data.map((game) => ({
          id: game._id,
          title: game.name || "Untitled",
          price: Math.round(game.price * 16000),
          image: "/images/CyberReign.png", // Please Change it while database already have images for produtcs
          category: game.categories_id?.category_name || "Uncategorized",
          description: game.description || "",
        }));
        setGames(mappedGames);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);

  const filteredGames = games.filter((game) => (selectedCategory === "All" || game.category === selectedCategory) && game.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const addToCart = (game) => {
    const exists = cartItems.find((item) => item.id === game.id);
    if (exists) {
      setCartItems((prev) => prev.map((item) => (item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCartItems([...cartItems, { ...game, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 bg-[#0a0025] text-white relative">
      <aside className="w-full mb-6 md:w-1/4 md:mb-0 md:pr-4">
        <input type="text" placeholder="Search games..." className="w-full px-4 py-2 rounded bg-[#1e1b3a] text-white mb-4 outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <h2 className="mb-2 font-bold">Category</h2>
        <div className="flex flex-wrap gap-2 md:flex-col">
          {categories.map((cat) => (
            <button
              key={cat.category_name}
              className={`px-4 py-2 rounded-full text-sm ${selectedCategory === cat.category_name ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-[#1e1b3a]"}`}
              onClick={() => setSelectedCategory(cat.category_name)}
            >
              {cat.category_name}
            </button>
          ))}
        </div>

        <button onClick={() => setCartOpen(true)} className="w-full py-2 mt-8 text-white bg-pink-500 rounded hover:bg-pink-600">
          🛒 View Cart ({cartItems.length})
        </button>
      </aside>

      <section className="grid grid-cols-1 gap-4 md:w-3/4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredGames.map((game) => (
          <Card key={game.id} game={game} onClick={onGameClick} onAddToCart={addToCart} />
        ))}
      </section>

      {cartOpen && (
        <div className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-[#1e1b3a] shadow-lg z-50 p-6 overflow-y-auto transition-transform">
          <button className="absolute text-xl text-white top-4 right-4" onClick={() => setCartOpen(false)}>
            ✕
          </button>
          <h2 className="mb-4 text-2xl font-bold">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-600">
                  <img src={item.image} alt={item.title} className="object-cover w-16 h-16 rounded" />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-400">Rp{item.price.toLocaleString()}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                    ✕
                  </button>
                </div>
              ))}

              <div className="mt-6 text-right">
                <p className="font-semibold">
                  Subtotal: Rp
                  {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
                </p>
                <button className="w-full px-4 py-2 mt-4 text-white bg-pink-500 rounded hover:bg-pink-600">Checkout</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default GameList;
