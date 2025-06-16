import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-inherit">
      <h1 className="text-8xl font-bold mb-4 animate-bounce">
        <span>4</span>
        <span className="text-pink-500">0</span>
        <span>4</span>
      </h1>
      <h2 className="text-2xl font-semibold text-gray-200 mb-2">
        Oops! Page not found
      </h2>
      <p className="text-gray-400 mb-6">
        Halaman yang kamu cari tidak tersedia.
      </p>
      <Link
        to="/"
        className="w-full md:w-fit bg-gradient-to-r from-[#f93cff] to-[#ffa9f9] text-white px-6 py-3 rounded-full font-bold transition hover:opacity-90"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}

export default NotFound;
