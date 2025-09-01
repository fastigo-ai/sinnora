import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import Logo from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-3">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="" className="md:lgw-40 md:lgh-14 w-30 h-8" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/ProductFilter" className="cursor-pointer hover:text-black">
              Collection
            </Link>
          </li>
          <li>
            <Link to="/new-arrival" className="cursor-pointer hover:text-black">
              New Arrival
            </Link>
          </li>
          <li>
            <Link
              to="/special-price"
              className="cursor-pointer hover:text-black"
            >
              Special Price
            </Link>
          </li>
          <li>
            <Link to="/our-story" className="cursor-pointer hover:text-black">
              Our Story
            </Link>
          </li>
          <li>
            <Link to="/celebrities" className="cursor-pointer hover:text-black">
              Celebrities
            </Link>
          </li>
        </ul>

        {/* Search + Cart */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <li className="cursor-pointer">Collection</li>
            <li className="cursor-pointer">New Arrival</li>
            <li className="cursor-pointer">Special Price</li>
            <li className="cursor-pointer">Our Story</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Celebrities</li>
            <li className="cursor-pointer">Blogs</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
