import React from "react";

const blogs = [
  {
    id: 1,
    title: "5 Game Open World Terbaik 2025",
    image: "/images/CyberReign.png",
    date: "3 Juni 2025",
  },
  {
    id: 2,
    title: "Tips Push Rank Mobile Legends",
    image: "/images/CyberReign.png",
    date: "28 Mei 2025",
  },
  {
    id: 3,
    title: "Review: GTA VI Bocor di Internet?",
    image: "/images/CyberReign.png",
    date: "20 Mei 2025",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#0c011b] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Blog & Berita Game
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#1a0833] rounded-xl overflow-hidden shadow-lg hover:shadow-[#f93cff]/30 transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <p className="text-sm text-gray-400 mb-1">{blog.date}</p>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
