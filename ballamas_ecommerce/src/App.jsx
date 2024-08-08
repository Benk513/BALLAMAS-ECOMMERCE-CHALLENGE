 
import {BrowserRouter as Router, Route,Routes  } from 'react-router-dom' 

// import Pages
 
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import ProductDetail from './pages/product/ProductDetail'; 
import Checkout from './pages/checkout/Checkout';
import PaymentConfirmation from './pages/payment/PaymentConfirmation';
 import Header from './components/header/Header';
import Footer from './components/footer/footer';



function App() {
 

  return (
    <>
 <Header/>
    
    <div className='container overflow-hidden' >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<PaymentConfirmation />} />
         </Routes>
      </Router>
      </div>
  <Footer/>
    </>
  )
}

export default App
