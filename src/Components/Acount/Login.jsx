import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email) {
      errors.email = "The Email field is required.";
      isValid = false;
    }

    if (!password) {
      errors.password = "The Password field is required.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login successful!");
      // Add login functionality here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden max-w-4xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-100 p-4 md:p-8 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/vTtjkxc3/auth-banner.png"
            alt="Login Illustration"
            className="object-cover w-full h-full max-w-full"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>
          <p className="text-gray-500 text-center mb-6">
            Your personal data will be used to support your experience throughout this website, to manage access to your account.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
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

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
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

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 text-sm hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-black transition duration-200"
            >
              Login →
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Do not have an account?{" "}
            <Link to="/register" className="   underline">Register now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
