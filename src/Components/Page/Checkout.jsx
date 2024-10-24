import React, { useState } from "react";
import Cart from "./Cart";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Afghanistan",
    state: "",
    city: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData, "Payment Method:", paymentMethod);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex mt-28 justify-between">
        {/* Left Section - Form */}
        <div className="w-2/3 bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Shipping information</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block mb-1 font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block mb-1 font-medium">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                >
                  <option value="Afghanistan">Bangladesh </option>
                 
                </select>
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block mb-1 font-medium">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block mb-1 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-2 rounded-md"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">Billing information</h3>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span>Same as shipping information</span>
            </label>

            <h3 className="text-xl font-semibold mt-6 mb-2">Payment method</h3>
            <div className="mb-4">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Cash on Delivery (COD)
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Stripe"
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Pay online via Stripe
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PayPal"
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Fast and safe online payment via PayPal
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Product Summary */}
        
       <Cart/>
      </div>
    </div>
  );
};

export default Checkout;
