import React from "react";
import Image from '../assets/images7.jpg'
import Image1 from '../assets/images.JPG'

const ProductHighlight = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Images */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
          {/* Main Model Image */}
          <img
            src={Image1}
            alt="Model with Bag"
            className="rounded-lg shadow-lg w-full max-w-md"
          />

          {/* Overlapping Product Image */}
          <img
            src={Image}
            alt="Product Close-up"
            className="absolute bottom-[-30px] right-[-30px] w-40 md:w-64 h-auto rounded-lg shadow-xl border-4 border-white"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 md:pl-16 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            AMNA ROUND BAG
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Experience the magic of timeless treasures and elevate your functions
            in our stunning Amna Gold Embellished Round Bag!
          </p>
          <button className="px-8 py-3 bg-black text-white font-semibold rounded-md shadow-md hover:bg-gray-800 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
