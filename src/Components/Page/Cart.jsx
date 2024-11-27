import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateCartItems, removeFromCart } = useContext(CartContext);

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const use2 = localStorage.getItem("user2") ? JSON.parse(localStorage.getItem("user2")) : null
  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (itemId, itemTitle) => {
    removeFromCart(itemId);
    toast.error(`${itemTitle} has been removed from your Cart!`);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
 
  if (!user && !use2) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <img
          src="https://i.postimg.cc/vTtjkxc3/auth-banner.png"
          alt="Cart Image"
          className="mb-8 w-[300px]"
        />
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          <Link to="/login"> Log In and Continue </Link>
        </button>
      </div>
    );
  }
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <img
              src="https://i.postimg.cc/fTt6z14c/empty-cart.png" // এখানে demo image এর জন্য link
              alt="Cart Image"
              className="mb-8"
            />
            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            <Link to="/shop"> Continue  Shopping</Link>
            </button>
          </div>
      ) : (
        <div className="space-y-4">
          {/* Responsive table with horizontal scroll on small screens */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="text-left border-b bg-gray-50">
                  <th className="p-4">Product</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4 flex items-center space-x-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 object-contain rounded-lg"
                      />
                      
                    </td>
                    <td className="p-4">${item.name}</td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button
                          className="text-blue-500 border border-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="text-blue-500 border border-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-4">
                      <button
                        className="text-red-500"
                        onClick={() => handleRemoveFromCart(item.id, item.name)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Price Summary Section */}
          <div className="bg-white p-4 rounded-lg shadow-md mt-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Price Summary</h3>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-4">
              <span>Tax (10%)</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-800">
              <span>Total</span>
              <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
            </div>
          </div>

          <div className="text-center mt-6">
          <Link to="/checkout" >
            <button
              className=" bg-black text-white px-6 py-3 rounded-lg  transition-colors"
              onClick={handleCheckout}
            > 
           Proceed to Checkout
              
            </button></Link>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;