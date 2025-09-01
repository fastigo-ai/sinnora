import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { product } from "../data/products";

// Small utility components
const HeartIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ShoppingBagIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${className}`}
  >
    {children}
  </span>
);

// Product Card
const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="min-w-[250px] sm:min-w-0 group rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Action Buttons */}
        <div
          className={`absolute top-3 right-3 transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="bg-white p-2 rounded-md"
          >
            <HeartIcon
              className={`${isLiked ? "fill-current text-red-500" : ""}`}
            />
          </button>
        </div>

        {/* Quick Add */}
        <div
          className={`absolute bottom-3 left-3 right-3 transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center"
          >
            <ShoppingBagIcon className="mr-2" /> Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <Badge className="text-gray-500">{product.category}</Badge>
        <h3 className="font-serif mt-2">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-sans">₹{product.price}</span>
          {product.originalPrice && (
            <span className="line-through text-gray-400 text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// 🔥 Heading with lines on both sides
const SectionHeading = ({ title }) => (
  <div className="flex items-center justify-center w-full mb-12">
    <div className="flex-grow border-t border-gray-400"></div>
    <h2 className="mx-4 text-lg tracking-widest text-gray-800 uppercase">
      {title}
    </h2>
    <div className="flex-grow border-t border-gray-400"></div>
  </div>
);

// New Arrivals Section
const Productscard = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <SectionHeading title="NEW ARRIVALS" />

      {/* Mobile: horizontal scroll | Desktop: grid */}
      <div className="flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:overflow-visible">
        {product.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default Productscard;
