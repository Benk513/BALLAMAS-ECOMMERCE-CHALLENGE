 
import {BrowserRouter as Router, Route,Routes  } from 'react-router-dom' 

// import Pages
 
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import ProductDetail from './pages/product/ProductDetail'; 
import Checkout from './pages/checkout/Checkout';
import PaymentConfirmation from './pages/payment/PaymentConfirmation';
import Banner from './components/header/Banner';
import Header from './components/header/Header';



function App() {
 

  return (
    <>
 <Header/>
    
    <div className='container' >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
         </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
