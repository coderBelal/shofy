import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // React Icons Import

const  Banner = () => {
  const sliderData = [
    {
      title: " TITLE COLLECTION 2024",
      description: "Samsung Galaxy Tab S6, Wifi Tablet",
      price: "$999.00",
   
      image: " https://i.postimg.cc/BQm26xtT/slider-1.png ",
      bgColor: "   bg-blue-800", // Background color
    },
    {
        title: " TITLE COLLECTION 2024",
        description: "Samsung Galaxy Tab S6, Wifi Tablet",
      price: "$699.00",
      discount: "-35% OFF",
      image: "https://i.postimg.cc/QdV1WHWR/slider-2.png  ",
      bgColor: "  bg-blue-800", // Background color
    },
    {
        title: " TITLE COLLECTION 2024",
        description: "Samsung Galaxy Tab S6, Wifi Tablet",
      price: "$1299.00",
      discount: "-25% OFF",
      image: " https://i.postimg.cc/HkK50dwj/slider-3.png",
      bgColor: "  bg-blue-800", // Background color
    },
  ];
  const banner = [
    {
      img: "https://i.postimg.cc/J0n4dBm8/1.jpg",
      title: "Special Offer on Electronics",
    },
    {
      img: "https://i.postimg.cc/PxK54QgK/2.jpg",
      title: "Trending Fashion Collection",
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
    <div className="relative mx-auto max-w-7xl m-4 rounded-xl    overflow-hidden">
      <div className="absolute  inset-0 flex items-center justify-between px-4">
  
      </div>

      {/* Slides */}
      {sliderData.map((slide, index) => (
        <div
         data-aos="zoom-out"
         data-aos-duration= "3000"
          key={index}
          className={`${
            index === currentIndex ? "block" : "hidden"
          } w-full h-full flex justify-center items-center ${slide.bgColor}`} // Dynamic bg color
        >
          {/* Image and Content */}
          <div className="flex flex-col  md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
            <div className=" text-white md:w-1/2 px-5">
              <h2 className="text-4xl mt-28 font-bold">{slide.title}</h2>
              <p className="text-xl my-3">{slide.description}</p>
              <p className="text-2xl font-semibold">{slide.price}</p>
              <button className="mt-5 px-6 py-3 bg-white text-teal-900 font-bold rounded-md">
                Shop Now
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
      <div className="absolute  left-0 right-0 flex justify-center">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${
              index === currentIndex ? " bg-black" : "bg-gray-400"
            } w-3 h-3 mx-1 rounded-full`}
          />
        ))}
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-around">
        {banner.map((banners, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl text-center text-blue-800 font-semibold mb-2">
              {banners.title}
            </h3>
            <img  data-aos="fade-right" src={banners.img} alt={banners.title} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default  Banner;
