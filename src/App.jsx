import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Headphone from "./Components/Category/Headphone";
import Bluetooth from "./Components/Category/Bluetooth";
import Mobaile from "./Components/Category/Mobaile";
import Cpu from "./Components/Category/Cpu";
import Watch from "./Components/Category/Watch";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Page/Cart";
import WishList from "./Components/Page/WishLisht";
import Shop from "./Components/Page/Shop";
import Login from "./Components/Acount/Login";
import Register from "./Components/Acount/Register";
import Contact from "./Components/Page/Contact";
import Search from "./Components/Page/Search";
import Checkout from "./Components/Page/Checkout";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Loader from "./Components/Page/Loading";
import Aos from "aos";
import Profile from "./Components/Acount/Profile";
 
const App = () => {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    Aos.init({
      duration:1000,
      once:true,
    })
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <div className="overflow-x-hidden">
      {loading ?( <Loader/>  ):(
    <Router>
    <Navbar />
    
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/headphone" element={<Headphone/>} />
    <Route path="/bluetooth" element={<Bluetooth/>}  />
    <Route path="/mobile" element={<Mobaile/>}  />
    <Route path="/cpu" element={<Cpu/>} />
    <Route path="/watch" element={<Watch/>}  />
     <Route path="/cart" element={<Cart/>} />
      <Route path="/wishlist" element={<WishList/>}  />
      <Route path="/shop" element={ <Shop/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/register" element={<Register/>}  />
      <Route path="/contact"  element={<Contact/>} />
      <Route path="/search"  element={<Search/>}  />
        <Route path="/checkout" element={<Checkout/>}  />
        <Route path="/profile" element={<Profile/> }  />
    </Routes>
<Footer/>
  </Router>
      )}
    </div>

  );
};

export default App;
