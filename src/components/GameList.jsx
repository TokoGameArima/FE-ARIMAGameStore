import { useState } from "react";

const categories = [
  "All",
  "Action",
  "Adventure",
  "RPG",
  "Strategy",
  "Simulation",
];
const dummyGames = [
  {
    id: 1,
    title: "Space Hero",
    price: 199000,
    image: "/images/CyberReign.png",
    category: "Action",
    description: "Lorem ipsum",
  },
  {
    id: 2,
    title: "Mystic Quest",
    price: 249000,
    image: "/images/CyberReign.png",
    category: "RPG",
    description: "Lorem ipsum",
  },
  {
    id: 3,
    title: "Battle Zone",
    price: 179000,
    image: "/images/CyberReign.png",
    category: "Action",
    description: "Lorem ipsum",
  },
  {
    id: 4,
    title: "Space Hero",
    price: 199000,
    image: "/images/CyberReign.png",
    category: "Action",
    description: "Lorem ipsum",
  },
  {
    id: 5,
    title: "Mystic Quest",
    price: 249000,
    image: "/images/CyberReign.png",
    category: "RPG",
    description: "Lorem ipsum",
  },
  {
    id: 6,
    title: "Battle Zone",
    price: 179000,
    image: "/images/CyberReign.png",
    category: "Action",
    description: "Lorem ipsum",
  },
  {
    id: 7,
    title: "Space Hero",
    price: 199000,
    image: "/images/CyberReign.png",
    category: "Action",
    description: "Lorem ipsum",
  },
  {
    id: 8,
    title: "Mystic Quest",
    price: 249000,
    image: "/images/CyberReign.png",
    category: "RPG",
    description: "Lorem ipsum",
  },
  {
    id: 9,
    title: "Battle Zone",
    price: 179000,
    image: "/images/CyberReign.png",
    category: "Action",
    description: "Lorem ipsum",
  },
];

function GameList({ onGameClick }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredGames = dummyGames.filter(
    (game) =>
      (selectedCategory === "All" || game.category === selectedCategory) &&
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (game) => {
    const exists = cartItems.find((item) => item.id === game.id);
    if (exists) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...game, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 bg-[#0a0025] text-white relative">
      {/* Sidebar Filter + Cart Toggle */}
      <aside className="md:w-1/4 w-full mb-6 md:mb-0 md:pr-4">
        <input
          type="text"
          placeholder="Search games..."
          className="w-full px-4 py-2 rounded bg-[#1e1b3a] text-white mb-4 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h2 className="font-bold mb-2">Category</h2>
        <div className="flex md:flex-col flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-[#1e1b3a]"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCartOpen(true)}
          className="mt-8 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
        >
          🛒 View Cart ({cartItems.length})
        </button>
      </aside>

      {/* Game List */}
      <section className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => onGameClick(game)}
            className="bg-[#1e1b3a] rounded-lg overflow-hidden shadow-md p-4 hover:scale-[1.01] transition"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-2">
              <h3 className="font-semibold text-lg">{game.title}</h3>
              <p className="text-sm text-gray-400">
                Rp{game.price.toLocaleString()}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); //mencegah klik card saat klik tombol
                  addToCart(game);
                }}
                className="mt-2 text-sm text-pink-400 hover:underline"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-[#1e1b3a] shadow-lg z-50 p-6 overflow-y-auto transition-transform">
          <button
            className="text-white text-xl absolute top-4 right-4"
            onClick={() => setCartOpen(false)}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b border-gray-600 py-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-400">
                      Rp{item.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <div className="mt-6 text-right">
                <p className="font-semibold">
                  Subtotal: Rp
                  {cartItems
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toLocaleString()}
                </p>
                <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded w-full">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default GameList;
