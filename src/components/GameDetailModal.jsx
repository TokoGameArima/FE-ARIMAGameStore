import React from "react";

const GameDetailModal = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl p-6 text-black relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-lg font-bold text-gray-500 hover:text-red-600"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Game Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-64 object-cover rounded"
            />
            {/* Thumbnail images */}
            <div className="flex mt-3 gap-2">
              {game.thumbnails?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  className="w-14 h-14 rounded object-cover border"
                />
              ))}
            </div>
          </div>

          {/* Game Info */}
          <div className="md:w-2/3 w-full">
            <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Genre:</strong> {game.category}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Platform:</strong> {game.platform}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Price:</strong> Rp{game.price.toLocaleString()}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Description:</strong> {game.description}
            </p>

            {/* Discount */}
            {game.discount && (
              <div className="bg-yellow-100 p-3 rounded mb-4">
                <p className="text-yellow-800 font-semibold">
                  Discount: {game.discount.type}
                </p>
                <p className="text-yellow-800">
                  Amount: {game.discount.amount} ({game.discount.note})
                </p>
              </div>
            )}

            {/* Variant */}
            {game.variants && (
              <>
                <h3 className="text-lg font-semibold mb-2">Variants</h3>
                <table className="w-full text-sm border rounded">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-2">Image</th>
                      <th className="p-2">Name/SKU</th>
                      <th className="p-2">Edition</th>
                      <th className="p-2">Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {game.variants.map((v, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2">
                          <img
                            src={v.image}
                            alt="variant"
                            className="w-12 h-12 object-cover rounded"
                          />
                        </td>
                        <td className="p-2">
                          {v.name}
                          <br />
                          <span className="text-xs text-gray-400">{v.sku}</span>
                        </td>
                        <td className="p-2">{v.edition}</td>
                        <td className="p-2">{v.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            <div className="flex justify-end mt-6">
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailModal;
