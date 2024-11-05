 
import { FaTruck, FaDollarSign, FaTag, FaHeadset } from "react-icons/fa"; // Importing icons from react-icons
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const categories = [
    {
      name: "Headphones",
      products: 4,
      image: "https://i.postimg.cc/26fyFVg2/1.png ",
      link:"/headphone"
    },
    {
      name: "With Bluetooth",
      products: 11,
      image: " https://i.postimg.cc/Df60Lf6P/5.png ",
      link:"/bluetooth"
    },
    {
      name: "Mobile Phone",
      products: 7,
      image: "   https://i.postimg.cc/cHMHDdSZ/2.png",
        link:"/mobile"
    },
    {
      name: "CPU Heat Pipes",
      products: 5,
      image: "https://i.postimg.cc/rsVp37V4/3.png ",
        link:"/cpu"
    },
    {
      name: "Smart Watch",
      products: 3,
      image: " https://i.postimg.cc/5ystVpyR/4.png ",
      link:"/watch"
    },
  ];

  return (
    <div className="py-10">
      {/* Category Section with Slider on Small Screens */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              data-aos="zoom-out"
              className="min-w-[200px] sm:min-w-0 rounded-lg p-6 text-center"
            >
         
              <div className="flex justify-center mb-4">
              <Link to={category.link}>   <img
                  src={category.image}
                  alt={category.name}
                  className="w-24 h-24 object-contain rounded-full bg-blue-100 p-1"
                /></Link>
             
              </div>
              <Link to={category.link} className="text-lg font-semibold">{category.name}</Link>
              <p className="text-gray-600">{category.products} products</p>
               
               
            </div>
          
           
          ))}
        </div>
      </div>

      {/* Service Info Section */}
<div className="mt-10 bg-white py-8">
  <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="flex rounded-lg items-center justify-center space-x-4 bg-slate-100 h-20">
      <FaTruck className="text-4xl text-pink-500" />
      <div className="text-center">
        <p className="font-bold text-lg">Free Delivery</p>
        <p className="text-sm text-gray-600">Orders from all items</p>
      </div>
    </div>
    <div className="flex rounded-lg items-center justify-center space-x-4 bg-slate-100 h-20">
      <FaDollarSign className="text-4xl text-red-500" />
      <div className="text-center">
        <p className="font-bold text-lg">Return & Refund</p>
        <p className="text-sm text-gray-600">Money-back guarantee</p>
      </div>
    </div>
    <div className="flex rounded-lg items-center justify-center space-x-4 bg-slate-100 h-20">
      <FaTag className="text-4xl text-yellow-500" />
      <div className="text-center">
        <p className="font-bold text-lg">Member Discount</p>
        <p className="text-sm text-gray-600">Every order over $140.00</p>
      </div>
    </div>
    <div className="flex rounded-lg items-center justify-center space-x-4 bg-slate-100 h-20">
      <FaHeadset className="text-4xl text-blue-500" />
      <div className="text-center">
        <p className="font-bold text-lg">Support 24/7</p>
        <p className="text-sm text-gray-600">Contact us 24 hours a day</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default CategoryPage;
