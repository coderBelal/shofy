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
        <div
          className={`md:flex md:items-center space-x-8 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative md:bg-transparent bg-white md:top-auto top-16 left-0 w-full shadow-md md:shadow-none transition duration-300 ease-in-out`}
        >
          <ul className="flex ml-16 font-semibold flex-col md:flex-row md:space-x-8 items-center py-4 md:py-0">
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
        <div className="lg:flex hidden items-center space-x-6">
          <Link to="/search">
            <FiSearch className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" />
          </Link>
          <Link to="/login">
            <FaUser className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" />
          </Link>
          <Link to="/wishlist">
            <FiHeart className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-6 space-y-6 absolute w-full left-0 top-16 z-40 transition-all duration-300 ease-in-out">
          <ul className="space-y-4 text-center">
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

          <div className="flex justify-center space-x-6">
            <Link to="/search"  >
              <FiSearch className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" />
            </Link>
            <Link to="/login">
              <FaUser className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" />
            </Link>
            <Link to="/wishlist">
              <FiHeart className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
