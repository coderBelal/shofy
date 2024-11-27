import { useContext, useState } from "react";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import { WishlistContext } from "../../Context/WishContext";
import CartSidebar from "../Page/CartSidebar";
import { useNavigate } from "react-router-dom";
 

const Cpu = () => {
  const products = [
    {
        id: 1,
        name: "ASUS ROG Swift PG279QM 27-Inch",
        store: "Robert's Store",
        reviews: 9,
        rating: 4,
        price: 1175,
        categories: ["all", "trending"],
        img: "https://i.postimg.cc/kG9gNhY2/product-11-600x600.jpg",
        description: "A premium 27-inch gaming monitor with a 144Hz refresh rate, exceptional color accuracy, and G-Sync support, perfect for serious gamers seeking top-tier performance.",
    },
    {
        id: 2,
        name: "BenQ EW3280U 32-Inch 4K HDR",
        store: "Old El Paso",
        reviews: 7,
        rating: 3,
        price: 878.85,
        originalPrice: 1085.90,
        discount: 19,
        categories: ["all", "trending"],
        img: "https://i.postimg.cc/kG9gNhY2/product-11-600x600.jpg",
        description: "Experience vibrant 4K visuals with HDR support, built-in speakers, and eye-care technology. Ideal for immersive gaming, entertainment, and professional tasks.",
    },
    {
      id: 3,
      name: "Dell UltraSharp U2720Q 27-Inch",
      store: "Global Store",
      reviews: 10,
      rating: 4,
      price: 238,
      originalPrice: 1728,
      discount: 86,
      categories: ["all", "on sale"],
      img: "https://i.postimg.cc/y8WYTRjy/product-details-desc-2-600x600.jpg",
      description: "A 4K UHD monitor with stunning image quality, perfect for creative professionals. Offers wide color coverage and premium design for work or entertainment.",
  },
  {
      id: 4,
      name: "HP Z27k G3 4K USB-C Monitor",
      store: "Global Office",
      reviews: 6,
      rating: 5,
      price: 934,
      originalPrice: 1290,
      discount: 27,
      categories: ["all", "featured"],
      img: "https://i.postimg.cc/bvDrqn2w/product-8-600x600.jpg",
      description: "Elevate your workspace with this sleek 4K monitor, offering ultra-clear visuals, USB-C connectivity, and superior color accuracy for creatives and professionals.",
  },

];

const [selectedProduct, setSelectedProduct] = useState(null);  
const { addToCart } = useContext(CartContext);
const { addToWishlist } = useContext(WishlistContext);

 


const handleQuickView = (product) => {
setSelectedProduct(product);  
};

const closeModal = () => {
setSelectedProduct(null);  
};
const navigate= useNavigate()
const user2 = localStorage.getItem("user2") ? JSON.parse(localStorage.getItem("user2")) : null
const handleAddToWishlist = (product) => {
  if (!user && !user2) {

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
const [isCartOpen, setIsCartOpen] = useState(false);

const openCart = () => setIsCartOpen(true);
const closeCart = () => setIsCartOpen(false);



  return (
    <div className="bg-gray-100 p-8">
    
  

    {/* Filter buttons */}
  
    <h1 className="text-3xl mt-14 font-bold text-center mb-8">
      <span className="text-blue-600 underline">Bluetooth</span> Shop
    </h1>

    {/* Product listing */}
    <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     
      {products.map((product) => (
        <div
          key={product.id}
          className="relative border border-gray-400 group bg-white h-96 p-5 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-[80%] h-40 object-cover rounded-md"
          />
          <div className="mt-4">
            <div className="font-bold text-blue-500 text-lg">
              {product.name}
            </div>
            <div className="text-gray-500 font-semibold">{product.store}</div>
            <div className="text-yellow-400 font-semibold">
              {product.rating} Stars
            </div>
            <div className="font-bold text-xl text-blue-500">
              ${product.price}
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-sm ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="absolute top-[83%] inset-0 flex items-center justify-center space-x-4">
          <button onClick={() => handleAddToCart(product)} className="text-white bg-black px-4 py-2 rounded-lg flex items-center space-x-2">
              <button onClick={openCart}>
              <FaShoppingCart />
              </button>
              
              <span className="hidden">Add to Cart</span>
            </button>
            <button onClick={() => handleQuickView(product)} className="text-white bg-blue-600 px-4 py-2 rounded-lg flex items-center space-x-2">
              <FaEye />
              <span className="hidden">Quick View</span>
            </button>
            <button onClick={() => handleAddToWishlist(product)} className="text-black bg-slate-200 px-4 py-2 rounded-lg flex items-center space-x-2">
              <FaHeart />
              <span className="hidden">Wishlist</span>
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Modal */}
    {selectedProduct && (
      <div   onClick={closeModal} className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10 flex items-center justify-center">
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
          <p>{selectedProduct.description}</p>
          <div className="absolute top-[87%] left-28 inset-0 flex items-center justify-center space-x-4">
          <button onClick={() => handleAddToCart(selectedProduct)} className="text-white bg-black px-4 py-2 rounded-lg flex items-center space-x-2">
              <button onClick={openCart}>
              <FaShoppingCart />
              </button>
              
              <span className="hidden">Add to Cart</span>
            </button>
         
            <button onClick={() => handleAddToWishlist(selectedProduct)} className="text-black bg-slate-200 px-4 py-2 rounded-lg flex items-center space-x-2">
              <FaHeart />
              <span className="hidden">Wishlist</span>
            </button>
          </div>
        </div>
        

      </div>
    )}

    <ToastContainer />
    <CartSidebar  isOpen={isCartOpen} closeSidebar={closeCart} />
  </div>
  )
}

export default Cpu
