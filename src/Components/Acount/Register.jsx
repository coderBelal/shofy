import { useState } from "react";
import { FaEnvelope, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
 

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name) {
      errors.name = "The Name field is required.";
      isValid = false;
    }
    if (!email) {
      errors.email = "The Email field is required.";
      isValid = false;
    }
    if (!password) {
      errors.password = "The Password field is required.";
      isValid = false;
    }
    if (password !== confirm) {
      errors.confirm = "Passwords do not match.";
      isValid = false;
    }
    if (!phonenumber.match(/^\d{10}$/)) {
      errors.phonenumber = "Phone number must be 10 digits.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registration successful!");
     
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white flex-col lg:flex-row flex rounded-lg shadow-md overflow-hidden max-w-4xl w-full">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-8 lg:flex items-center justify-center">
          <img src="https://i.postimg.cc/vTtjkxc3/auth-banner.png" alt="Login Illustration" className="object-cover w-full h-full" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Register Your Account</h2>
          <p className="text-gray-500 text-center mb-6">
            Your personal data will be used to support your experience throughout this website, to manage access to your account.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                 
                </span>
                <input
                  type="text"
                  id="name"
                  className={`block w-full pl-5 pr-3 py-2 border ${errors.name ? "border-red-500 shake" : "border-gray-300"} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
 
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                 
                </span>
                <input
                  type="email"
                  id="email"
                  className={`block w-full pl-5 pr-3 py-2 border ${errors.email ? "border-red-500 shake" : "border-gray-300"} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                
                </span>
                <input
                  type="password"
                  id="password"
                  className={`block w-full pl-5 pr-3 py-2 border ${errors.password ? "border-red-500 shake" : "border-gray-300"} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                 
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                
                </span>
                <input
                  type="password"
                  id="confirm"
                  className={`block w-full pl-5 pr-3 py-2 border ${errors.confirm ? "border-red-500 shake" : "border-gray-300"} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Confirm Password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
                 
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center text-gray-400">
         
                </span>
                <input
                  type="text"
                  id="phone"
                  className={`block w-full pl-5 pr-3 py-2 border ${errors.phonenumber ? "border-red-500 shake" : "border-gray-300"} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Phone Number"
                  value={phonenumber}
                  onChange={(e) => setPhone(e.target.value)}
                />
                 
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 text-sm hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Register →
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Do not have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
 
    </div>
  );
};

export default Register;
