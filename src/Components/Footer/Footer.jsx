import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="md:flex justify-between mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900"> 
            <div className="flex right-6 items-center space-x-">
          <img
            src="https://i.postimg.cc/rsskSTyf/logo.png"
            alt="Shofy Logo"
            className="w-30 h-10 object-contain"
          />
        </div>

            </h2>
            <p className="text-sm mt-2">
              Shofy is a powerful tool eCommerce Laravel script for creating a professional and visually appealing online store.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="text-gray-500 hover:text-blue-500" />
              <FaTwitter className="text-gray-500 hover:text-blue-500" />
              <FaYoutube className="text-gray-500 hover:text-red-500" />
              <FaLinkedinIn className="text-gray-500 hover:text-blue-500" />
            </div>
          </div>

          {/* My Account and Information */}
          <div className="md:flex space-y-6 md:space-y-0 md:space-x-16">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">My Account</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#">Track Orders</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">Returns</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Information</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Latest News</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Talk To Us</h4>
            <p className="text-sm">Got Questions? Call us</p>
            <p className="text-2xl font-bold text-gray-900 mb-4">+670 413 90 762</p>
            <p className="text-sm">
              <a href="mailto:support@shofy.com" className="hover:underline">support@shofy.com</a>
            </p>
            <p className="text-sm">79 Sleepy Hollow St. Jamaica, New York 1432</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-t border-gray-300 pt-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Health & Beauty</h4>
            <ul className="space-y-1">
              <li><a href="#">Top Brands</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Computers & Laptops</a></li>
              <li><a href="#">Mobile Phone</a></li>
              <li><a href="#">CPU Heat Pipes</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Electronics</h4>
            <ul className="space-y-1">
              <li><a href="#">Featured</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">TWS Earphones</a></li>
              <li><a href="#">Gifts</a></li>
              <li><a href="#">Computers</a></li>
              <li><a href="#">Playstation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Sweet Treats</h4>
            <ul className="space-y-1">
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Wireless Headphones</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">TWS Earphones</a></li>
              <li><a href="#">CPU Coolers</a></li>
              <li><a href="#">Smart Watch</a></li>
              <li><a href="#">Gaming Console</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Fashion</h4>
            <ul className="space-y-1">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Featured</a></li>
              <li><a href="#">Top Brands</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Computers & Laptops</a></li>
              <li><a href="#">Mobile Phone</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
          <p>© 2024 All Rights Reserved.</p>
          <div className="flex space-x-4">
            <img src="/path-to-paypal-logo.png" alt="PayPal" className="h-6" />
            <img src="/path-to-visa-logo.png" alt="Visa" className="h-6" />
            <img src="/path-to-mastercard-logo.png" alt="Mastercard" className="h-6" />
            <img src="/path-to-stripe-logo.png" alt="Stripe" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
