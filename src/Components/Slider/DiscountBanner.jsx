import React, { useState, useEffect } from 'react';

const DiscountBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // ব্যবহারকারী প্রথমবার এলে ব্যানার দেখাও
    setShowBanner(true);
  }, []);

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="bg-blue-500 text-white p-4 md:p-6 rounded-lg shadow-lg mt-6 text-center relative">
        <button 
          className="absolute top-2 right-2 text-white bg-transparent text-lg" 
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Limited Time Offer!</h2>
        <p className="text-lg md:text-xl">Get 20% off on all services. Use code <span className="font-bold">DISCOUNT20</span> at checkout!</p>
        <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100 transition duration-300 font-semibold">
          Shop Now
        </button>
      </div>
    )
  );
};

export default DiscountBanner;
