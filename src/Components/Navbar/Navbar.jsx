import { useState } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu and user
import { FiShoppingCart, FiHeart, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex right-6 items-center space-x-">
          <img
            src="https://i.postimg.cc/rsskSTyf/logo.png"
            alt="Shofy Logo"
            className="w-30 h-10 object-contain"
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
        <div className={`md:flex md:items-center space-x-8 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative md:bg-transparent bg-white md:top-auto top-16 left-0 w-full shadow-md md:shadow-none transition duration-300 ease-in-out`}>
          <ul className="flex flex-col  ml-16 md:flex-row md:space-x-8 items-center md:justify-between py-4 md:py-0">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-700 hover:text-blue-500 transition duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-700 hover:text-blue-500 transition duration-300">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition duration-300">
                Contact
              </Link>
            </li>
            <li>
           
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="lg:flex hidden md:flex items-center space-x-6">
          <div className="relative">
          <Link to="/search"><FiSearch className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" /></Link>
          </div>
          <div className="relative">
            <Link to="/login"><FaUser className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" /></Link>
            
          </div>
          <div className="relative">
            <Link to="/wishlist">
              <FiHeart className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-6 space-y-6 absolute w-full left-0 top-16 z-40 transition-all duration-300 ease-in-out">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block text-center text-gray-700 hover:text-blue-500 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="block text-center text-gray-700 hover:text-blue-500 transition duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="block text-center text-gray-700 hover:text-blue-500 transition duration-300">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block text-center text-gray-700 hover:text-blue-500 transition duration-300">
                Contact
              </Link>
            </li>
            <li>
           
            </li>
          </ul>

          <div className="flex items-center justify-center space-x-6">
            <div className="relative">
              <Link to="/search"><FiSearch className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" /></Link>
              
            </div>
            <div className="relative">
              <Link to="/login"><FaUser className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" /></Link>
              
            </div>
            <div className="relative">
              <Link to="/wishlist">
                <FiHeart className="text-2xl text-gray-700 hover:text-blue-500 transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
