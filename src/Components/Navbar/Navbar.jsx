import { useState } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { FiShoppingCart, FiHeart, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.postimg.cc/rsskSTyf/logo.png"
            alt="Shofy Logo"
            className="w-32 h-10 object-contain"
          />
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-2xl text-gray-700 transition duration-300 hover:text-blue-500" />
            ) : (
              <FaBars className="text-2xl text-gray-700 transition duration-300 hover:text-blue-500" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex md:items-center space-x-8">
          <ul className="flex ml-16 font-semibold flex-col md:flex-row md:space-x-8 items-center">
            <li>
              <Link
                to="/"
                onClick={() => setMenu('home')}
                className={menu === 'home' ? 'text-blue-500 underline transition duration-300' : 'hover:text-blue-500'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                onClick={() => setMenu('shop')}
                className={menu === 'shop' ? 'text-blue-500 underline transition duration-300' : 'hover:text-blue-500'}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onClick={() => setMenu('cart')}
                className={menu === 'cart' ? 'text-blue-500 underline transition duration-300' : 'hover:text-blue-500'}
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenu('contact')}
                className={menu === 'contact' ? 'text-blue-500 underline transition duration-300' : 'hover:text-blue-500'}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/search">
            <FiSearch className="text-xl" />
          </Link>
          <Link to="/login">
            <FaUser className="text-xl" />
          </Link>
          <Link to="/wishlist">
            <FiHeart className="text-xl" />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl text-gray-700 focus:outline-none"
        >
          <FaTimes />
        </button>
        <ul className="mt-16 space-y-6 text-center font-semibold">
          <li>
            <Link
              to="/"
              onClick={() => {
                setMenu('home');
                toggleMenu();
              }}
              className={menu === 'home' ? 'text-blue-500 underline' : 'hover:text-blue-500'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={() => {
                setMenu('shop');
                toggleMenu();
              }}
              className={menu === 'shop' ? 'text-blue-500 underline' : 'hover:text-blue-500'}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              onClick={() => {
                setMenu('cart');
                toggleMenu();
              }}
              className={menu === 'cart' ? 'text-blue-500 underline' : 'hover:text-blue-500'}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => {
                setMenu('contact');
                toggleMenu();
              }}
              className={menu === 'contact' ? 'text-blue-500 underline' : 'hover:text-blue-500'}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center mt-8 space-x-6">
          <Link to="/search">
            <FiSearch className="text-xl" />
          </Link>
          <Link to="/login">
            <FaUser className="text-xl" />
          </Link>
          <Link to="/wishlist">
            <FiHeart className="text-xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
