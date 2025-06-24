import { Link } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <main className="flex-grow p-4">
        <div className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-0 md:min-h-screen bg-inherit">
          <h1 className="text-8xl font-bold mb-4 animate-bounce">
            <span>4</span>
            <span className="text-pink-500">0</span>
            <span>4</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">
            Oops! Tidak ditemukan.
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
        </main>
      <Footer />
    </div>
  );
}

export default NotFound;
