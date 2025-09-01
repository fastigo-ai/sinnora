// src/components/ProductFilter.jsx
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FilterSection = ({ title, children, isOpen, onToggle }) => (
  <div className="border-b py-4">
    <button onClick={onToggle} className="flex items-center justify-between w-full text-lg font-medium text-gray-800">
      {title}
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
      {children}
    </div>
  </div>
);

const ProductFilter = ({ products, setFilteredProducts }) => {
  const [filterState, setFilterState] = useState({
    price: [],
    colors: [],
    sizes: [],
  });

  const [openSections, setOpenSections] = useState({
    price: true,
    colors: true,
    sizes: true,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const getUniqueValues = (key) => {
    const values = new Set();
    products.forEach(p => {
      if (key === 'colors') {
        p.colors.forEach(c => values.add(JSON.stringify(c)));
      } else if (key === 'sizes') {
        p.sizes.forEach(s => values.add(s));
      }
    });
    return Array.from(values).map(v => key === 'colors' ? JSON.parse(v) : v);
  };

  const handleFilterChange = (key, value) => {
    setFilterState(prev => {
      const currentValues = prev[key];
      const newValue = key === 'colors' ? JSON.stringify(value) : value;
      if (currentValues.includes(newValue)) {
        return { ...prev, [key]: currentValues.filter(v => v !== newValue) };
      } else {
        return { ...prev, [key]: [...currentValues, newValue] };
      }
    });
  };

  useEffect(() => {
    applyFilters();
  }, [filterState]);

  const applyFilters = () => {
    const { price, colors, sizes } = filterState;
    const filtered = products.filter(product => {
      // Price filter
      const priceMatch = price.length === 0 || price.some(range => {
        const [min, max] = range.split('-').map(Number);
        return product.price >= min && product.price <= max;
      });

      // Color filter
      const colorMatch = colors.length === 0 || product.colors.some(c =>
        colors.includes(JSON.stringify(c))
      );

      // Size filter
      const sizeMatch = sizes.length === 0 || product.sizes.some(s =>
        sizes.includes(s)
      );

      return priceMatch && colorMatch && sizeMatch;
    });
    setFilteredProducts(filtered);
  };

  const uniqueColors = getUniqueValues('colors');
  const uniqueSizes = getUniqueValues('sizes');

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-xl font-bold mb-4">Filters</h3>

      {/* Price Filter */}
      <FilterSection title="Price" isOpen={openSections.price} onToggle={() => toggleSection('price')}>
        <div className="flex flex-col gap-2">
          {['0-1000', '1000-3000', '3000-5000', '5000-15000'].map(range => (
            <label key={range} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                onChange={() => handleFilterChange('price', range)}
                checked={filterState.price.includes(range)}
                className="rounded text-black focus:ring-black"
              />
              <span className="text-sm text-gray-700">₹{range.replace('-', ' - ₹')}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Color Filter */}
      <FilterSection title="Color" isOpen={openSections.colors} onToggle={() => toggleSection('colors')}>
        <div className="flex flex-wrap gap-2 py-2">
          {uniqueColors.map(color => (
            <button
              key={color.name}
              style={{ backgroundColor: color.hex }}
              className={`w-8 h-8 rounded-full border-2 transition ${
                filterState.colors.includes(JSON.stringify(color))
                  ? 'border-black'
                  : 'border-gray-300'
              }`}
              title={color.name}
              onClick={() => handleFilterChange('colors', color)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Size Filter */}
      <FilterSection title="Size" isOpen={openSections.sizes} onToggle={() => toggleSection('sizes')}>
        <div className="flex flex-wrap gap-2 py-2">
          {uniqueSizes.map(size => (
            <button
              key={size}
              onClick={() => handleFilterChange('sizes', size)}
              className={`border rounded-full px-4 py-1 text-sm font-medium transition ${
                filterState.sizes.includes(size)
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

export default ProductFilter;