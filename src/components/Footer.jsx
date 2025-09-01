import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F5E9D7] text-[#4A4A4A] py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SHOP</h3>
          <ul className="space-y-2">
            <li><Link to="/our-story" className="hover:underline">Our Story</Link></li>
            <li><Link to="/terms-of-service" className="hover:underline">Terms Of Service</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/faqs" className="hover:underline">FAQ's</Link></li>
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home Page</Link></li>
            <li><Link to="/returns-exchanges" className="hover:underline">Returns & Exchanges</Link></li>
            <li><Link to="/international-orders" className="hover:underline">International Orders</Link></li>
            <li><Link to="/shipping-delivery-policy" className="hover:underline">Shipping & Delivery Policy</Link></li>
          </ul>
        </div>

        {/* Main Menu Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">MAIN MENU</h3>
          <ul className="space-y-2">
            <li><Link to="/home" className="hover:underline">Home</Link></li>
            <li><Link to="/collection" className="hover:underline">Collection</Link></li>
            <li><Link to="/new-arrivals" className="hover:underline">New Arrivals</Link></li>
            <li><Link to="/special-prices" className="hover:underline">Special Prices</Link></li>
            <li><Link to="/our-story" className="hover:underline">Our Story</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/celebrities" className="hover:underline">Celebrities</Link></li>
            <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup Section */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">NEWSLETTER SIGN UP</h3>
          <p className="mb-4">Sign up for exclusive updates, new arrivals & insider-only discounts</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 w-full sm:w-60 border border-gray-300 rounded"
            />
            <button className="px-4 py-2 bg-black text-white rounded">SUBMIT</button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-gray-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-gray-600">
              <FaYoutube size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-gray-600">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
