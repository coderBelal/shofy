import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaEye, FaHeart } from 'react-icons/fa';
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import CartSidebar from '../Page/CartSidebar';
import { WishlistContext } from '../../Context/WishContext';
const products = [
  {
      id: 1,
      name: "Acer Predator X34 34-Inch Curved",
      store: "Gamers' Paradise",
      reviews: 11,
      rating: 5,
      price: 999,
      categories: ["all", "trending"],
      img: "https://i.postimg.cc/kG9gNhY2/product-11-600x600.jpg",
      description: "An ultra-wide curved gaming monitor with G-Sync and a high refresh rate, offering an immersive experience for gaming enthusiasts.",
  },
  {
      id: 2,
      name: "LG 27UK650-W 27-Inch 4K UHD",
      store: "Visual World",
      reviews: 9,
      rating: 4,
      price: 759.50,
      originalPrice: 950,
      discount: 20,
      categories: ["all", "trending"],
      img: "https://i.postimg.cc/kG9gNhY2/product-11-600x600.jpg",
      description: "Delivering stunning 4K clarity with HDR, this monitor is ideal for content creators, photographers, and designers seeking high color accuracy.",
  },
  {
      id: 3,
      name: "Philips Brilliance 329P9H 32-Inch",
      store: "Digital Store",
      reviews: 12,
      rating: 5,
      price: 399,
      originalPrice: 1200,
      discount: 67,
      categories: ["all", "on sale"],
      img: "https://i.postimg.cc/y8WYTRjy/product-details-desc-2-600x600.jpg",
      description: "A 32-inch 4K monitor with a built-in docking station and USB-C connection, perfect for professionals looking for enhanced productivity.",
  },
  {
      id: 4,
      name: "Lenovo ThinkVision P32u-10",
      store: "Office Express",
      reviews: 5,
      rating: 4,
      price: 850,
      originalPrice: 1150,
      discount: 26,
      categories: ["all", "featured"],
      img: "https://i.postimg.cc/bvDrqn2w/product-8-600x600.jpg",
      description: "An ultra-clear 4K monitor with a wide color gamut, designed for creative professionals requiring top-notch image quality.",
  },
  {
      id: 5,
      name: "JBL Wireless Headphones Black",
      store: "Tech Corner",
      reviews: 7,
      rating: 3,
      price: 189,
      discount: 15,
      categories: ["all", "featured", "on sale"],
      img: "https://i.postimg.cc/0yHrgnj4/product-7-600x600.jpg",
      description: "Comfortable wireless headphones with a bold sound signature, perfect for on-the-go listening and extended use.",
  },
  {
      id: 6,
      name: "Sony WH-1000XM4",
      store: "Gadget Zone",
      reviews: 10,
      rating: 5,
      price: 250,
      originalPrice: 500,
      discount: 50,
      categories: ["all", "on sale"],
      img: "https://i.postimg.cc/HszVzdgd/product-5-600x600.jpg",
      description: "Industry-leading noise-canceling wireless headphones with superior sound quality, designed for immersive listening experiences.",
  },
  {
      id: 7,
      name: "Sennheiser True Wireless Earbuds",
      store: "Audio Lab",
      reviews: 15,
      rating: 4,
      price: 175,
      categories: ["all", "trending", "featured"],
      img: "https://i.postimg.cc/k4W5bdsr/product-3-600x600.jpg",
      description: "High-fidelity wireless earbuds with crystal clear sound, perfect for audiophiles seeking quality on the go.",
  },
  {
      id: 8,
      name: "Google Nest Hub Max",
      store: "Smart Home Store",
      reviews: 13,
      rating: 5,
      price: 289,
      categories: ["all", "featured"],
      img: "https://i.postimg.cc/qBXRB4gy/product-16-600x600.jpg",
      description: "A smart home display with a built-in camera, voice control, and seamless integration with your smart devices for a connected lifestyle.",
  },
  {
      id: 9,
      name: "Razer DeathAdder Elite Mouse",
      store: "Gamer's Hub",
      reviews: 18,
      rating: 5,
      price: 49.99,
      categories: ["all", "trending"],
      img: "https://i.postimg.cc/FHK1n8rc/product-2-600x600.jpg",
      description: "An ergonomic, high-precision gaming mouse with customizable buttons, built for professional gamers and tech enthusiasts.",
  },
  {
      id: 10,
      name: "Microsoft Surface Laptop 4",
      store: "Microsoft Store",
      reviews: 22,
      rating: 4,
      price: 1599,
      categories: ["all", "featured"],
      img: "https://i.postimg.cc/SNgx8d6K/product-19-600x600.jpg",
      description: "A powerful laptop with an elegant design, long battery life, and the latest processors, perfect for students and professionals alike.",
  },
  {
      id: 11,
      name: "OnePlus 9 Pro",
      store: "Smart World",
      reviews: 28,
      rating: 4,
      price: 699,
      originalPrice: 899,
      discount: 22,
      categories: ["all", "on sale"],
      img: "https://i.postimg.cc/J4rhGvBg/product-17-600x600.jpg",
      description: "A flagship smartphone with fast performance, high-quality cameras, and 5G support, ideal for tech-savvy users.",
  },
  {
      id: 12,
      name: "Lenovo Yoga Slim 7",
      store: "PC World",
      reviews: 35,
      rating: 5,
      price: 1099,
      categories: ["all", "trending"],
      img: "https://i.postimg.cc/qBXRB4gy/product-16-600x600.jpg",
      description: "An ultra-portable laptop with a slim design, powerful performance, and a brilliant display, ideal for work and entertainment on the go.",
  },
];

const NewSlider = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal কন্ট্রোলের জন্য State
  const {addToCart}= useContext(CartContext)
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.info(`${product.name} added to wishlist!`);
  };
  const handleQuickView = (product) => {
    setSelectedProduct(product); 
  };
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

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
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
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
