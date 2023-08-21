import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';
import './App.css';
import ProductPage from './components/ProductPage.jsx';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <>
      <Router>
        <Header cart={cart} />
        <Routes>
          <Route index element={<Home data={data} />} />
          <Route
            path="/:productId"
            element={<ProductPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
