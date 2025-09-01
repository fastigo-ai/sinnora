import React, { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Heart,
  Minus,
  Plus,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { productData } from "../data/products";
import ProductDetailsTabs from "./ProductDetailsTabs";
import Productscard from "../pages/Product";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  // agar galat id ho to safe return
  if (!product) {
    return <div className="mt-24 text-center">Product not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const changeMainImage = (index) => {
    setSelectedImage(product.images[index]);
  };

  const getCurrentImageIndex = () =>
    product.images.findIndex((img) => img.id === selectedImage.id);

  const handleNextImage = () => {
    const currentIndex = getCurrentImageIndex();
    const nextIndex = (currentIndex + 1) % product.images.length;
    changeMainImage(nextIndex);
  };

  const handlePrevImage = () => {
    const currentIndex = getCurrentImageIndex();
    const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    changeMainImage(prevIndex);
  };

  const handleQuantityChange = (type) => {
    if (type === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (type === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ---------------- Left Section: Image Gallery ---------------- */}
        <div className="flex flex-col md:flex-row-reverse gap-4">
          {/* Main Image */}
          <div className="flex-1 relative rounded-xl overflow-hidden shadow-md bg-[#F5F5F5]">
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-[450px] object-cover"
            />
            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
              <button
                onClick={handlePrevImage}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={handleNextImage}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto w-full md:w-28">
            {product.images.map((img, index) => (
              <button
                key={img.id}
                onClick={() => changeMainImage(index)}
                className={`w-20 h-20 md:w-full aspect-square rounded-lg border-2 overflow-hidden transition ${
                  selectedImage.id === img.id
                    ? "border-black"
                    : "border-gray-200 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- Right Section: Product Details ---------------- */}
        <div className="space-y-4">
          {/* Rating + Save */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star size={18} fill="gold" stroke="none" />
              <span className="text-gray-700 font-medium text-sm">
                {product.rating} ★ ({product.reviewCount} reviews)
              </span>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center gap-1 border border-gray-300 px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100 transition text-sm"
            >
              <Heart
                size={18}
                className={isLiked ? "fill-current text-red-500" : ""}
              />
              {isLiked ? "Saved" : "Save"}
            </button>
          </div>

          {/* Title + Tagline */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
            {product.name}
          </h1>
          <p className="text-gray-500 text-sm">{product.tagline}</p>

          {/* Price Section */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-base text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="px-2 py-0.5 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                {product.discount}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              MRP (inclusive of all taxes)
            </p>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              Choose Colour:{" "}
              <span className="font-normal">{selectedColor.name}</span>
            </h3>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border transition ${
                    selectedColor.name === color.name
                      ? "border-black scale-110"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                ></button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              Quantity
            </h3>
            <div className="flex items-center w-28 border border-gray-300 rounded-full overflow-hidden">
              <button
                onClick={() => handleQuantityChange("minus")}
                className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              >
                <Minus size={14} />
              </button>
              <span className="flex-1 text-center font-semibold text-gray-800 text-sm">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange("plus")}
                className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Check Delivery */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              Check Delivery
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="flex-1 p-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="px-5 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
                Check
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium py-2.5 rounded-lg shadow hover:scale-[1.02] transition text-sm">
              <ShoppingBag size={18} />
              Add to Cart
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white font-medium py-2.5 rounded-lg shadow hover:scale-[1.02] transition text-sm">
              <ShoppingBag size={18} />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Extra Info / Description */}
      <div className="mt-8">
        <ProductDetailsTabs />
      </div>
      <div className="mt-8">
        <Productscard />
      </div>
    </div>
  );
};

export default ProductDetail;
