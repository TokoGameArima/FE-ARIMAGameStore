import React from "react";
//
import HeroSection from "../../components/Home/HeroSection";
import FeatureCards from "../../components/Home/FeatureCards";
import PopularGames from "../../components/Home/PopularGames";
// import BlogSection from "../../components/Home/BlogSection";

const Home = () => {
  return (
    <div className="bg-[#0C0325] text-white font-sans">
      <HeroSection />
      <FeatureCards />
      <PopularGames />
      {/* <BlogSection /> */}
    </div>
  );
};

export default Home;
