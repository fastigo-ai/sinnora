import React, { useState } from "react";

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews" },
    { id: "specs", label: "Specifications" },
  ];

  return (
    <div className="mt-12  mx-auto px-4">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700">
        {activeTab === "description" && (
          <p className="text-start">
            This is a premium handcrafted bag made with sustainable materials.
            Designed for modern lifestyle, it blends durability and elegance.
          </p>
        )}
        {activeTab === "reviews" && (
          <div>
            <p className="mb-2 font-semibold">Customer Reviews</p>
            <ul className="space-y-2">
              <li>⭐️⭐️⭐️⭐️⭐️ Amazing quality and design!</li>
              <li>⭐️⭐️⭐️⭐️ Perfect size and very comfortable to carry.</li>
            </ul>
          </div>
        )}
        {activeTab === "specs" && (
          <ul className="list-disc list-inside">
            <li>Material: Premium Vegan Leather</li>
            <li>Dimensions: 30cm x 20cm x 10cm</li>
            <li>Weight: 0.8kg</li>
            <li>Warranty: 1 Year</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
