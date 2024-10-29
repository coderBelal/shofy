import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaTimes } from "react-icons/fa"; // Close icon
import { Link } from "react-router-dom";
 
const CartSidebar = ({ isOpen, closeSidebar }) => {
  const { cartItems, updateCartItems,removeFromCart } = useContext(CartContext);

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };
  const handleRemoveFromCart = (itemId, itemTitle) => {
    removeFromCart(itemId);
    toast.error(`${itemTitle} has been removed from your Cart!`);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };
 


  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-6 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Your Cart</h2>
        <button onClick={closeSidebar} className="p-2 rounded hover:bg-gray-200">
          <FaTimes className="text-2xl text-gray-600" />
        </button>
      </div>

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
          <div className="max-h-80 overflow-y-auto">
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-start p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
          
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <button
                          className="text-blue-500 border border-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold">{item.quantity}</span>
                        <button
                          className="text-blue-500 border border-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                        <button
                        className="text-red-500"
                        onClick={() => handleRemoveFromCart(item.id, item.name)}
                      >
                        X
                      </button>
              
                      </div>
           
                      <p className="text-gray-500 mt-1">
                        ${(item.price * item.quantity).toFixed(2)}{" "}
                        <span className="text-sm text-gray-400">
                          (${item.price.toFixed(2)} each)
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Price Summary
            </h3>
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
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              onClick={handleCheckout}
            > 
           Proceed to Checkout
              
            </button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
