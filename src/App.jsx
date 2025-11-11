import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import Cart from './Pages/Cart.jsx';
import About from './Pages/About.jsx';
import PaymentPage from './Pages/Payment.jsx';
import Error from './Pages/Error.jsx';
import Navbar from './Pages/Navbar.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const clearCart = () => setCartItems([]);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart} />} />
        <Route path='/Shop' element={<Shop addToCart={addToCart} />} />
        <Route path='/ProductDetails/:id' element={<ProductDetails addToCart={addToCart} />} />
        <Route
          path='/Cart'
          element={
            <Cart
              cart={cartItems}
              setCart={setCartItems}
            />
          }
        />
        <Route path='/Payment' element={<PaymentPage clearCart={clearCart} />} />
        <Route path='/About' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
