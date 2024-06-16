import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"
import Checkout from "./pages/Checkout"

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
          path="/cart"
          element={<Cart/>}
        />

        <Route
          path="checkout"
          element={<Checkout/>}
        />
        
      </Routes>

      <Footer/>
    </>
  )
}

export default App
