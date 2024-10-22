import React from "react";
import { AiFillStar } from "react-icons/ai";

const products = {
  onSale: [
    {
      name: "BenQ EW3280U 32-Inch 4K HDR Entertainment Monitor (Digital)",
      image: "  https://i.postimg.cc/k4W5bdsr/product-3-600x600.jpg",
      rating: 4,
      reviews: 7,
      price: 878.85,
      oldPrice: 1085.00,
    },
    {
      name: "Dell UltraSharp U2720Q 27-Inch 4K USB-C Monitor",
      image: " https://i.postimg.cc/qBXRB4gy/product-16-600x600.jpg",
      rating: 4,
      reviews: 10,
      price: 238.00,
      oldPrice: 1728.00,
    },
  ],
  trending: [
    {
      name: "Sony WH-1000XM4 Wireless Noise Canceling Headphones",
      image: " https://i.postimg.cc/kG9gNhY2/product-11-600x600.jpg",
      rating: 5,
      reviews: 9,
      price: 2396.00,
    },
    {
      name: "Apple TV 4K (2nd Generation) (Digital)",
      image: "https://i.postimg.cc/kG9gNhY2/product-11-600x600.jpg ",
      rating: 4,
      reviews: 9,
      price: 1054.80,
      oldPrice: 1465.00,
    },
  ],
  topRated: [
    {
      name: "HP Z27k G3 4K USB-C Monitor",
      image: " https://i.postimg.cc/y8WYTRjy/product-details-desc-2-600x600.jpg",
      rating: 4,
      reviews: 6,
      price: 934.00,
      oldPrice: 1290.00,
    },
    {
      name: "Samsung Odyssey G7 32-Inch Curved Gaming Monitor (Digital)",
      image: "  https://i.postimg.cc/bvDrqn2w/product-8-600x600.jpg",
      rating: 5,
      reviews: 9,
      price: 720.00,
      oldPrice: 2395.00,
    },
  ],
};

const ProductList = () => {
  const renderProduct = (product) => (
    <div className="flex flex-col items-start space-y-2 p-4 border rounded-lg">
      <img src={product.image} alt={product.name} className="h-32 w-auto object-contain" />
      <h3 className="text-gray-700 font-semibold">{product.name}</h3>
      <div className="flex items-center">
        {Array(product.rating).fill().map((_, i) => (
          <AiFillStar key={i} className="text-yellow-400" />
        ))}
        <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
      </div>
      <p className="text-blue-500 font-semibold">${product.price.toFixed(2)}</p>
      {product.oldPrice && (
        <span className="text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">On Sale</h2>
          <div className="space-y-4">
            {products.onSale.map((product, index) => (
              <div key={index}>{renderProduct(product)}</div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Trending Products</h2>
          <div className="space-y-4">
            {products.trending.map((product, index) => (
              <div key={index}>{renderProduct(product)}</div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Top Rated</h2>
          <div className="space-y-4">
            {products.topRated.map((product, index) => (
              <div key={index}>{renderProduct(product)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
