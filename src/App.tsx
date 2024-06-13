import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import ShopCart from "./pages/ShopCart"
import ProductDetail from "./pages/ProductDetail"

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={<HomePage/>}
        />

        <Route 
          path="/shop"
          element={<Shop/>}
        />

        <Route 
          path="/about"
          element={<About/>}
        />

        <Route 
          path="/contact"
          element={<Contact/>}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail/>}
        />
        
        <Route 
          path="/shopcart"
          element={<ShopCart/>}
        />
        
      </Routes>

      <Footer/>
    </>
  )
}

export default App
