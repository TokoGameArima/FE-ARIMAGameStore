const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between bg-[#1e1b3a] rounded-lg p-4 shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-sm text-gray-400">
            Price: Rp{item.price.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="font-semibold">
        <div className="mt-2 text-right text-sm">
          Rp{item.price.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
