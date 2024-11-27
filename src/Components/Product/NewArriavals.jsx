import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaEye, FaHeart } from 'react-icons/fa';
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import CartSidebar from '../Page/CartSidebar';
import { WishlistContext } from '../../Context/WishContext';
import product1 from "../../assets/Arrivals/product1.jpg"
 
import product2 from "../../assets/Arrivals/product2.jpg";
import product3 from "../../assets/Arrivals/product3.jpg";
import product4 from "../../assets/Arrivals/product4.jpg";
import product5 from "../../assets/Arrivals/product5.jpg";
import product6 from "../../assets/Arrivals/product6.jpg";
import product7 from "../../assets/Arrivals/product7.jpg";
import product8 from "../../assets/Arrivals/product8.jpg";
import product9 from "../../assets/Arrivals/product9jpg.jpg";
import product10 from "../../assets/Arrivals/product10.jpg";
import { Link, useNavigate } from 'react-router-dom';
 
const products = [
  {
    id: 1,
    name: "LG 674 litres Refrigerator",
    store: "Gamers' Paradise",
    reviews: 11,
    rating: 5,
    price: 999,
    img: product1,
    description: "Experience freshness with the LG 674 liters Refrigerator, offering a spacious design to accommodate all your essentials. Equipped with advanced cooling technology, it ensures uniform cooling to preserve food quality and freshness. Perfect for large families or kitchen enthusiasts, this model combines energy efficiency with convenience.",
  },
  {
    id: 2,
    name: "Redmi 12 max",
    store: "Visual World",
    reviews: 9,
    rating: 4,
    price: 759.50,
    originalPrice: 950,
    discount: 20,
    img: product2,
    description: "The Redmi 12 Max is designed to provide a high-quality viewing experience with 4K HDR clarity, making it ideal for creatives and tech enthusiasts. Its large display delivers vibrant colors, while the processor ensures smooth performance for multitasking. With a sleek design and robust features, it’s a must-have for high-definition lovers.",
  },
  {
    id: 3,
    name: "Earbuds 2.0 Version",
    store: "Digital Store",
    reviews: 12,
    rating: 5,
    price: 399,
    originalPrice: 1200,
    discount: 67,
    img: product3,
    description: "The Earbuds 2.0 offers immersive sound quality in a sleek, portable package. With an impressive battery life and superior audio output, they are perfect for music enthusiasts on the go. The built-in noise-canceling feature ensures a clear listening experience, making them ideal for both casual listening and professional calls.",
  },
  {
    id: 4,
    name: "Speaker Mangooo",
    store: "Office Express",
    reviews: 5,
    rating: 4,
    price: 850,
    originalPrice: 1150,
    discount: 26,
    img: product4,
    description: "Elevate your audio experience with the Speaker Mangooo, delivering high-quality sound with a broad audio range. Its compact design is perfect for easy portability, and the powerful bass system makes it ideal for parties or personal enjoyment. With a long-lasting battery, enjoy uninterrupted music anywhere, anytime.",
  },
  {
    id: 5,
    name: "HP Laptop 15 inch",
    store: "Tech Corner",
    reviews: 7,
    rating: 3,
    price: 189,
    discount: 15,
    img: product5,
    description: "This HP Laptop is an excellent choice for students and professionals alike. The 15-inch display ensures comfortable viewing, while its lightweight design makes it easily portable. Powered by reliable processors, it handles multitasking efficiently. Whether for work or entertainment, this laptop is a versatile addition to any setup.",
  },
  {
    id: 6,
    name: "Apple Watch",
    store: "Gadget Zone",
    reviews: 10,
    rating: 5,
    price: 250,
    originalPrice: 500,
    discount: 50,
    img: product6,
    description: "The Apple Watch combines style with cutting-edge technology, providing health monitoring, fitness tracking, and seamless connectivity. Ideal for tech enthusiasts, it helps you stay organized and motivated throughout the day. With its intuitive interface and customizable features, it’s more than just a watch – it's a personal assistant.",
  },
  {
    id: 7,
    name: "Nokia 12000",
    store: "Audio Lab",
    reviews: 15,
    rating: 4,
    price: 175,
    img: product7,
    description: "The Nokia 12000 is built for durability and long-lasting battery life, making it the ideal companion for those who need a reliable device. With a strong signal reception and simple interface, it’s perfect for staying connected without distractions. It’s a practical choice for users seeking a straightforward mobile experience.",
  },
  {
    id: 8,
    name: "Redmi 13",
    store: "Smart Home Store",
    reviews: 13,
    rating: 5,
    price: 289,
    img: product8,
    description: "The Redmi 13 transforms your home into a smart haven with its intuitive display and voice control features. Integrated with the latest technology, it allows you to monitor and control compatible devices. Its sleek design and advanced capabilities make it a stylish, functional addition to any smart home setup.",
  },
  {
    id: 9,
    name: "Gold Watch",
    store: "Gamer's Hub",
    reviews: 18,
    rating: 5,
    price: 49.99,
    categories: ["all", "trending"],
    img: product9,
    description: "This Gold Watch blends luxury with functionality, offering an ergonomic design suitable for both fashion and performance. Built for precision, it includes customizable buttons and robust build quality, perfect for users who appreciate a stylish yet practical accessory.",
  },
  {
    id: 10,
    name: "Web Cam 1.0",
    store: "Microsoft Store",
    reviews: 22,
    rating: 4,
    price: 1599,
    img: product10,
    description: "The Web Cam 1.0 enhances virtual meetings and presentations with high-definition clarity. It features a sleek design and offers sharp image quality for video calls, online classes, or streaming. Simple to set up and easy to use, it’s perfect for professionals needing a dependable webcam.",
  },
  {
    id: 11,
    name: "Walton BD",
    store: "Smart World",
    reviews: 28,
    rating: 4,
    price: 699,
    originalPrice: 899,
    discount: 22,
    img: product1,
    description: "The Walton BD smartphone offers a seamless user experience with its high-performance processor and 5G capability. Ideal for tech enthusiasts, it combines a sleek design with powerful features, including an advanced camera and extended battery life, making it a top choice for modern users.",
  },
];


const NewSlider = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal কন্ট্রোলের জন্য State
  const {addToCart}= useContext(CartContext)
  const { addToWishlist } = useContext(WishlistContext);

 
  const handleQuickView = (product) => {
    setSelectedProduct(product); 
  };
  const navigate=useNavigate()
 
 
  const handleAddToWishlist = (product) => {
    if (!user) {
  
      toast.warning('You need to log in to add items to the cart!');
      navigate("/login"); // replace with your login route
      return;
    }
    addToWishlist(product);
    toast.info(`${product.name} added to wishlist!`);
  };


 
    const handleAddToCart = (product) => {
      if (!user) {
  
        toast.warning('You need to log in to add items to the cart!');
        navigate("/login"); // replace with your login route
        return;
      }
    
      addToCart(product);
      toast.success(`${product.name} added to cart!`);
    };
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const closeModal = () => {
    setSelectedProduct(null);  
  };
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);


  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-blue-600">New</span> Arrivals
      </h2>

      {/* Horizontal scrolling container with hidden scrollbar */}
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {products.map((product) => (
          <div
          data-aos="zoom-in"
            key={product.id}
            className="relative min-w-[250px] flex-shrink-0 border border-gray-400 h-96 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-4">
              <div className="font-bold text-blue-500 text-lg">{product.name}</div>
              <div className="text-gray-500 font-semibold">{product.store}</div>
              <div className="text-yellow-400 font-semibold">{product.rating} Stars</div>
              <div className="font-bold text-xl text-blue-500">
                ${product.price}
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
             
              <button  onClick={() => handleQuickView(product)} className="text-white bg-blue-600 px-4 py-2 rounded-lg flex items-center space-x-2">
                <FaEye />
              </button>
              <button onClick={() => handleAddToWishlist(product)}  className="text-black bg-slate-200 px-4 py-2 rounded-lg flex items-center space-x-2">
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div   onClick={closeModal} className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-lg  text-red-700  "
            >
              X
            </button>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedProduct.name}</h2>
 
             <p className=" text-gray-600     ">{selectedProduct.description}</p>
            <div className="mt-4">
              <span className="font-bold text-xl text-blue-500">
                ${selectedProduct.price}
              </span>
              {selectedProduct.originalPrice && (
                <span className="text-gray-400 line-through text-sm ml-2">
                  ${selectedProduct.originalPrice}
                </span>
              )}
               
            </div>
            <div className="absolute   left-36  top-[83%] inset-0   flex items-center justify-center space-x-4">
              <button onClick={() => handleAddToCart(selectedProduct)}  className="text-white   bg-black px-4 py-2 rounded-lg flex items-center space-x-2">
              <button onClick={openCart}>
                <FaShoppingCart />
                </button>
                <span className=" hidden  ">Add to Cart</span>
              </button>
           
              <button onClick={() => handleAddToWishlist(selectedProduct)}  className="text-black  bg-slate-200     px-4 py-2 rounded-lg flex items-center space-x-2">
                <FaHeart />
                <span className=" hidden  ">Wishlist</span>
              </button>
            </div>
            <CartSidebar  isOpen={isCartOpen} closeSidebar={closeCart}  />
          </div>
    
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default NewSlider;
