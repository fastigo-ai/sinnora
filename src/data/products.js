import Image from "../assets/images.JPG";
import images2 from "../assets/images2.JPG";
import images3 from "../assets/images3.jpeg";
import images4 from "../assets/images4.jpeg";
import images7 from "../assets/images7.jpg";
import images9 from "../assets/images9.JPG";

export const product = [
  {
    id: 1,
    name: "Emerald Luxury Handbag",
    price: 299,
    originalPrice: 399,
    category: "Luxury",
    image: Image,
  },
  {
    id: 2,
    name: "Classic Tote Bag",
    price: 199,
    originalPrice: 249,
    category: "Tote",
    image: images7,
  },
  {
    id: 3,
    name: "Mini Crossbody Bag",
    price: 149,
    originalPrice: 179,
    category: "Crossbody",
    image: images2,
  },
  {
    id: 4,
    name: "Elegant Shoulder Bag",
    price: 229,
    originalPrice: 289,
    category: "Shoulder",
    image: images3,
  },
];

// ✅ productData is array of detailed products
export const productData = [
  {
    id: 1,
    name: "Emerald Luxury Handbag",
    tagline: "Emerald Luxury Handbag",
    rating: 4.7,
    category: "Luxury",
    reviewCount: 60,
    offerBadge: "Get at ₹2699 by using GRAB300",
    price: 2999,
    originalPrice: 14999,
    discount: "80%",
    images: [
      { id: 1, url: images9, alt: "Emerald Luxury Handbag" },
      { id: 2, url: Image, alt: "Close-up of the handbag" },
      { id: 3, url: images2, alt: "Side View" },
      { id: 4, url: images4, alt: "Product box and accessories" },
    ],
    colors: [
      { name: "Platinum Gold", hex: "#E5E1C9" },
      { name: "Cosmic Black", hex: "#333333" },
      { name: "Metallic Red", hex: "#B65E69" },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Classic Tote Bag",
    tagline: "Spacious everyday tote",
    rating: 4.5,
    category: "Tote",
    reviewCount: 40,
    offerBadge: "Flat 50% Off",
    price: 1999,
    originalPrice: 3999,
    discount: "50%",
    images: [
      { id: 1, url: images7, alt: "Classic Tote" },
      { id: 2, url: images9, alt: "Back view" },
    ],
    colors: [
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Brown", hex: "#8B4513" },
    ],
    sizes: ["One Size"],
  },
  {
    id: 3,
    name: "Mini Crossbody Bag",
    tagline: "Perfect for outings",
    rating: 4.6,
    category: "Crossbody",
    reviewCount: 25,
    offerBadge: "Save ₹500",
    price: 1499,
    originalPrice: 1999,
    discount: "25%",
    images: [
      { id: 1, url: images2, alt: "Mini Crossbody Front" },
      { id: 2, url: images3, alt: "Mini Crossbody Side" },
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["S", "M"],
  },
];
