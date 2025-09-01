import React from "react";
import IMAGES from "../assets/images11.JPG";
import IMAGES1 from "../assets/images4.jpeg";
import IMAGES2 from "../assets/images5.jpg";
import IMAGES3 from "../assets/images6.jpg";
import IMAGES4 from "../assets/images7.jpg";

const trendingCategories = [
  {
    id: 1,
    name: "Handbags",
    image: IMAGES,
  },
  {
    id: 2,
    name: "Handbags",
    image: IMAGES1,
  },
  {
    id: 3,
    name: "Handbags",
    image: IMAGES2,
  },
  {
    id: 4,
    name: "Handbags",
    image: IMAGES4,
  },
];

const TrendingCategories = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 max-w-7xl mx-auto">
      {/* Title with line on both sides */}
      <div className="flex items-center justify-center w-full mb-12">
        <div className="flex-grow border-t border-gray-400"></div>
        <h2 className="mx-4 text-lg tracking-widest text-gray-800 uppercase">
          Trending Categories
        </h2>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {trendingCategories.map((category) => (
          <div
            key={category.id}
            className="w-[220px] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition group"
          >
            {/* Category Image */}
            <div className="relative w-full h-[250px] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-sans text-black">
                  {category.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
