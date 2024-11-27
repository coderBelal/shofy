import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  // Google Sign-In Handler
  const handleGoogleSign = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const userLog = res.user;
        const userData = {
          name: userLog.displayName,
          email: userLog.email,
          photoURL: userLog.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success("Login Successful!");
        setTimeout(() => {
          navigate("/") 
        }, 1000); 
      })
      .catch((error) => {
        console.error("Error:", error.message);
        toast.error("Google Login Failed. Please try again.");
      });
  };

  // Email and Password Sign-In Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const userLog = res.user;
        const userData = {
          name: userLog.displayName || "User",
          email: userLog.email,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success("Login Successful!");
        setTimeout(() => {
          navigate("/") 
        }, 1000); 
      })
      .catch((error) => {
  
        toast.error('Error: ' + error.message, {});
      });
  };
  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (!resetEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    sendEmailVerification(auth, resetEmail)
      .then(() => {
        toast.success("Password reset email sent successfully.");
        setShowResetModal(false);
        setResetEmail("");
      })
      
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden max-w-4xl">
        <div className="w-full md:w-1/2 bg-gray-100 p-4 md:p-8 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/vTtjkxc3/auth-banner.png"
            alt="Login Illustration"
            className="object-cover w-full h-full max-w-full"
          />
        </div>

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
              <input
                type="email"
                id="email"
                className="block w-full pl-5 pr-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full pl-5 pr-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <button       onClick={() => setShowResetModal(true)} className="text-indigo-600 text-sm hover:underline">
                Forgot password?
              </button>
            </div>

            <div className="space-y-5">
              <button
                onClick={handleGoogleSign}
                type="button"
                className="w-full text-black font-semibold border border-black py-2 rounded-md hover:bg-black hover:text-white transition duration-200"
              >
                Sign In With Your Google Account
              </button>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-black transition duration-200"
              >
                Login →
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Do not have an account?{" "}
            <Link to="/register" className="underline">
              Register now
            </Link>
          </p>
        </div>
      </div>
          {/* Password Reset Modal */}
          {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
            <h3 className="text-xl font-bold mb-4">Reset Password</h3>
            <form onSubmit={handlePasswordReset}>
              <div className="mb-4">
                <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="reset-email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="block w-full pl-5 pr-3 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowResetModal(false)}
                  className="text-gray-500 mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md"
                >
                  Send Reset Email
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default Login;
