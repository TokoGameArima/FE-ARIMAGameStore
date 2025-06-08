import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import PopularGames from "../components/PopularGames";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <div className="bg-[#0C0325] text-white font-sans">
      <HeroSection />
      <FeatureCards />
      <PopularGames />
      <BlogSection />
    </div>
  );
};

export default Home;
