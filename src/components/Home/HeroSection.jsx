import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-b from-[#0f0220] to-[#1a0333] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            <strong className="font-extrabold">Toko Game Terbaik</strong> untuk Setiap Player
          </h1>
          <p className="text-sm md:text-xl mb-8 text-gray-300">Temukan dan beli game favoritmu sekarang. Mulai dari aksi, petualangan, hingga simulasi — semua lengkap!</p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => navigate("/games")} className="w-full md:w-fit bg-gradient-to-r from-[#f93cff] to-[#ffa9ca] text-white px-6 py-3 rounded-full font-bold transition hover:opacity-90">
              Beli Sekarang
            </button>
            <button onClick={() => navigate("/games")} className="w-full md:w-fit border-2 border-[#f93cff] text-white px-6 py-3 rounded-full font-bold hover:bg-[#f93cff]/20">
              Lihat Game
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src="/images/HeroImg.png" alt="Gamer Main Game" className="w-full max-w-md mx-auto shadow-2xl" />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/image/bg-stars.png')] opacity-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
