import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      setError('The email field is required.');
    } else {
      setError('');
      // Handle the form submission logic here (e.g., send to backend)
      console.log('Subscribed with email:', email);
      // Clear the email field after subscription
      setEmail('');
    }
  };

  return (
    <div className="bg-blue-600 text-white py-10 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text */}
        <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
          <p className="uppercase font-semibold text-sm tracking-widest">
            Sale 20% off all store
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Subscribe to Our Newsletter
          </h2>
        </div>

        {/* Right Section - Subscription Form */}
        <div className="relative md:w-1/2">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-l-full px-4 py-2 text-gray-700 w-full md:w-72 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-black text-white px-6 py-2 rounded-full md:rounded-r-full mt-2 md:mt-0"
            >
              Subscribe
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
