import { useContext } from "react";
import { WishlistContext } from "../../Context/WishContext";
import { CartContext } from "../../Context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishList = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} has been added to your cart!`);
  };

  const handleRemoveFromWishlist = (itemId, itemTitle) => {
    removeFromWishlist(itemId);
    toast.error(`${itemTitle} has been removed from your wishlist!`);
  };

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center text-gray-800">
        Your Wishlist
      </h2>

      {wishlist.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left font-semibold text-gray-700">Product</th>
                <th className="p-4 text-left font-semibold text-gray-700">Title</th>
                <th className="p-4 text-left font-semibold text-gray-700">Price</th>
          
                <th className="p-4 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => {
                const discountedPrice = (
                  item.price - (item.price * item.discount) / 100
                ).toFixed(2);

                return (
                  <tr key={item.id} className="border-b">
                    {/* Product Info */}
                    <td className="p-4 flex items-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                     
                    </td>
                    <td className="p-4">
                    <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                        <p className="text-gray-500">Vendor: {item.vendor}</p>
                        <p className="text-gray-500">SKU: {item.sku}</p>
                    </td>
                    {/* Price */}
                    <td className="p-4">
                      <p className="text-gray-700 text-lg font-bold">
                        ${discountedPrice}
                      </p>
                      <p className="text-gray-500 text-sm line-through">
                        ${item.price.toFixed(2)}
                      </p>
                    </td>

                    {/* Quantity */}
              

                    {/* Actions */}
                    <td className="p-4 flex items-center space-x-2">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        onClick={() => handleAddToCart(item)}
                      >
                      <FaShoppingCart/>
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                        onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                      >
                     <FaTrash/>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <img
          src="https://i.postimg.cc/fTt6z14c/empty-cart.png" // এখানে demo image এর জন্য link
          alt="Cart Image"
          className="mb-8"
        />
        <h2 className="text-3xl font-bold mb-4">Your wishlist is empty</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          <Link to="/shop"> Continue  to choosing</Link>
         
        </button>
      </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default WishList;
