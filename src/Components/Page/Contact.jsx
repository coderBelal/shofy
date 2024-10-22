import React, { useState } from 'react';

const Contact  = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    subject: '',
    content: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.agree) newErrors.agree = 'You must agree to the terms';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the data
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="flex pt-24 flex-col lg:flex-row justify-center items-center py-10 px-5 bg-gray-50">
      {/* Contact Form */}
      <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Sent A Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500 shake' : 'border-gray-300'} rounded-md shadow-sm`}
                value={formData.name}
                onChange={handleChange}
              />
            
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500 shake' : 'border-gray-300'} rounded-md shadow-sm`}
                value={formData.email}
                onChange={handleChange}
              />
            
            </div>

            {/* Address Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Content Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="content">Content *</label>
            <textarea
              name="content"
              id="content"
              className={`mt-1 block w-full p-2 border ${errors.content ? 'border-red-500 shake' : 'border-gray-300'} rounded-md shadow-sm`}
              rows="4"
              value={formData.content}
              onChange={handleChange}
            />
          
          </div>

          {/* Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className={`h-4 w-4 ${errors.agree ? 'border-red-500' : 'border-gray-300'} text-indigo-600 rounded`}
              checked={formData.agree}
              onChange={handleChange}
            />
            <label className="ml-2 block text-sm text-gray-900" htmlFor="agree">
              I agree to the Terms and Privacy Policy
            </label>
          </div>
          {errors.agree && <p className="text-red-500 text-xs mb-4">{errors.agree}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="w-full lg:w-1/2 p-6 mt-10 lg:mt-0 lg:ml-10 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <p className="font-semibold text-gray-700">Email:</p>
          <p>contact@shofy.com</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-700">Phone:</p>
          <p>+670 413 90 762</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-700">Address:</p>
          <p>502 New St, Brighton VIC 3186, Australia</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Find on social media:</p>
          <div className="flex space-x-3 mt-2">
            {/* Icons (Use appropriate icons like from FontAwesome or similar) */}
            <a href="#" className="text-blue-600">Facebook</a>
            <a href="#" className="text-blue-600">Twitter</a>
            <a href="#" className="text-blue-600">YouTube</a>
            <a href="#" className="text-blue-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact ;
