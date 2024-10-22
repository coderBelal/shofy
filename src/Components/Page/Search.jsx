import { useContext, useState } from "react";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import { WishlistContext } from "../../Context/WishContext";
import CartSidebar from "./CartSidebar";
 

const Search   = () => {
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
      {
          id: 5,
          name: "Bluetooth Headphones Red/Blue",
          store: "Sale Store",
          reviews: 4,
          rating: 3,
          price: 200,
          discount: 10,
          categories: ["all", "featured", "on sale"],
          img: "https://i.postimg.cc/0yHrgnj4/product-7-600x600.jpg",
          description: "Lightweight, stylish wireless headphones with a comfortable fit, rich sound quality, and long battery life. Perfect for music lovers on the go.",
      },
      {
          id: 6,
          name: "Wireless Headset Black",
          store: "Tech Store",
          reviews: 5,
          rating: 4,
          price: 150,
          originalPrice: 485,
          discount: 69,
          categories: ["all", "on sale"],
          img: "https://i.postimg.cc/HszVzdgd/product-5-600x600.jpg",
          description: "Wireless headset featuring high-quality sound, noise-canceling microphone, and long-lasting battery life, ideal for gaming, work calls, or travel.",
      },
      {
          id: 7,
          name: "Beats Wireless Earbuds Red",
          store: "Tech Store",
          reviews: 8,
          rating: 4,
          price: 175,
          categories: ["all", "trending", "featured"],
          img: "https://i.postimg.cc/k4W5bdsr/product-3-600x600.jpg",
          description: "Premium wireless earbuds with powerful sound, sweat resistance, and seamless connectivity. Ideal for workouts, commuting, or casual listening.",
      },
      {
          id: 8,
          name: "Smart Display Alarm Clock",
          store: "Home Store",
          reviews: 5,
          rating: 4,
          price: 238,
          categories: ["all", "featured"],
          img: "https://i.postimg.cc/qBXRB4gy/product-16-600x600.jpg",
          description: "A smart alarm clock with an integrated display, voice control, and multi-functional features, making it perfect for modern homes and bedside tables.",
      },
      {
          id: 9,
          name: "Logitech MX Master 3",
          store: "Gadget World",
          reviews: 15,
          rating: 5,
          price: 99.99,
          categories: ["all", "trending"],
          img: "https://i.postimg.cc/FHK1n8rc/product-2-600x600.jpg",
          description: "A high-precision wireless mouse designed for productivity, offering advanced ergonomics, customizable buttons, and long battery life for professionals and tech enthusiasts.",
      },
      {
          id: 10,
          name: "Apple MacBook Pro 16-inch",
          store: "Apple Store",
          reviews: 20,
          rating: 5,
          price: 2399,
          categories: ["all", "featured"],
          img: "https://i.postimg.cc/SNgx8d6K/product-19-600x600.jpg",
          description: "The ultimate laptop for creatives, featuring a powerful M1 chip, Retina display, and long battery life, designed to handle intense workloads and creative projects.",
      },
      {
          id: 11,
          name: "Samsung Galaxy S21",
          store: "Mobile Hub",
          reviews: 25,
          rating: 4,
          price: 799,
          originalPrice: 999,
          discount: 20,
          categories: ["all", "on sale"],
          img: "https://i.postimg.cc/J4rhGvBg/product-17-600x600.jpg",
          description: "A flagship smartphone with a brilliant display, powerful performance, and pro-grade cameras. Perfect for those seeking top-tier features and cutting-edge technology.",
      },
      {
          id: 12,
          name: "Dell XPS 13",
          store: "Global Store",
          reviews: 30,
          rating: 5,
          price: 999,
          categories: ["all", "trending"],
          img: "https://i.postimg.cc/qBXRB4gy/product-16-600x600.jpg",
          description: "A sleek, ultraportable laptop with premium build quality, a stunning InfinityEdge display, and powerful performance, perfect for productivity and entertainment on the go.",
      },
    ];

  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);  
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.info(`${product.name} added to wishlist!`);
  };

 

  const handleQuickView = (product) => {
    setSelectedProduct(product);  
  };

  const closeModal = () => {
    setSelectedProduct(null);  
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered products based on category and search term
  const filteredProducts = products.filter((product) => {
    return (
      product.categories.includes(filter) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-blue-600 underline">Trending</span> Products
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded-lg w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter buttons */}
    
 
      {/* Product listing */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10 flex items-center justify-center">
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
  );
};

export default  Search;
