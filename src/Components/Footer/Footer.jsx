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
              <div className="flex right-6 items-center">
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
                <li>Track Orders</li>
                <li>Shipping</li>
                <li>Wishlist</li>
                <li>My Account</li>
                <li>Order History</li>
                <li>Returns</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Information</h4>
              <ul className="text-sm space-y-2">
                <li>Our Story</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Latest News</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Talk To Us</h4>
            <p className="text-sm">Got Questions? Call us</p>
            <p className="text-2xl font-bold text-gray-900 mb-4">+8801568-885065</p>
            <p className="text-sm font-semibold">coderbelal99@gmail.com</p>
            <p className="text-sm">79 Sleepy Hollow St. Jamaica, New York 1432</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-t border-gray-300 pt-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Health & Beauty</h4>
            <ul className="space-y-1">
              <li>Top Brands</li>
              <li>Best Sellers</li>
              <li>Computers & Laptops</li>
              <li>Mobile Phone</li>
              <li>CPU Heat Pipes</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Electronics</h4>
            <ul className="space-y-1">
              <li>Featured</li>
              <li>New Arrivals</li>
              <li>TWS Earphones</li>
              <li>Gifts</li>
              <li>Computers</li>
              <li>Playstation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Sweet Treats</h4>
            <ul className="space-y-1">
              <li>Headphones</li>
              <li>Wireless Headphones</li>
              <li>Accessories</li>
              <li>TWS Earphones</li>
              <li>CPU Coolers</li>
              <li>Smart Watch</li>
              <li>Gaming Console</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Fashion</h4>
            <ul className="space-y-1">
              <li>New Arrivals</li>
              <li>Featured</li>
              <li>Top Brands</li>
              <li>Electronics</li>
              <li>Best Sellers</li>
              <li>Computers & Laptops</li>
              <li>Mobile Phone</li>
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
