const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex justify-center gap-2 flex-wrap">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-full text-sm ${
            currentPage === page
              ? "bg-pink-600 text-white"
              : "bg-[#1e1b3a] text-gray-300 hover:bg-[#29274a]"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
