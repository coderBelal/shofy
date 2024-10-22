import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // React Icons Import
import { Link } from "react-router-dom";

const Slider = () => {
  const sliderData = [
    {
      title: "The best notebook collection 2023",
      description: "Exclusive offer -10% off this week",
      price: "$999.00",
      discount: "-35% OFF",
      image: " https://i.postimg.cc/wM6krb8R/slider-1.png",
      bgColor: " bg-indigo-100", // Background color
    },
    {
      title: "Latest Tablets on Discount",
      description: "Special Offer -35% off",
      price: "$699.00",
      discount: "-35% OFF",
      image: " https://i.postimg.cc/660cZwnr/slider-2.png",
      bgColor: " bg-indigo-300", // Background color
    },
    {
      title: "High Performance Laptops",
      description: "Get up to 25% off this month",
      price: "$1299.00",
      discount: "-25% OFF",
      image: " https://i.postimg.cc/6qYhxLtj/slider-3.png",
      bgColor: "bg-purple-200", // Background color
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute  inset-0 flex items-center justify-between px-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="text-white p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-60"
        >
          <AiOutlineLeft size={30} /> {/* Left Arrow */}
        </button>
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="text-white p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-60"
        >
          <AiOutlineRight size={30} /> {/* Right Arrow */}
        </button>
      </div>

      {/* Slides */}
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? "block" : "hidden"
          } w-full h-full flex justify-center items-center ${slide.bgColor}`} // Dynamic bg color
        >
          {/* Image and Content */}
          <div className="flex flex-col  md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
            <div className="text-black md:w-1/2 px-5">
              <h2 className="text-4xl mt-28 font-bold">{slide.title}</h2>
              <p className="text-xl my-3">{slide.description}</p>
              <p className="text-2xl font-semibold">{slide.price}</p>
              <button className="mt-5 px-6 py-3 bg-white text-teal-900 font-bold rounded-md">
                <Link to="/shop"> Shop Now</Link>
               
              </button>
            </div>
            <div className="md:w-1/2 mt-5 md:mt-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Indicator Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        {sliderData.map((_, index) => (
        
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            } w-3 h-3 mx-1 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
