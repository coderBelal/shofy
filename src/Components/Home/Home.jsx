import CategoryPage from "../Category/CategoryPage"
import Newsletter from "../NewsLetter"
 
import HomeProduct from "../Product/HomeProduct"
import NewSlider from "../Product/NewArriavals"
import ProductList from "../Product/ProductList"
 
import Banner from "../Slider/Banner"
import Slider from "../Slider/Slider"

 
const Home = () => {
  return (
    <div>
 <Slider/>
 <CategoryPage/>
 <HomeProduct/>
 <Banner/>
 {/* responsive issue for this  */}
 <NewSlider/>  
 <ProductList/>
 <Newsletter/>
 
    </div>
  )
}

export default Home