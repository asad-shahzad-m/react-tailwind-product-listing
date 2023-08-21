import React from 'react';
import { Link } from 'react-router-dom';
import LineItem from './LineItem.jsx';

const Cart = ({ cart, setCart }) => {
  console.log(cart);
  if (cart.length === 0) {
    return (
      <div>
        <h2>Your cart is empty!</h2>
        <Link to="/">Go to products</Link>
      </div>
    );
  }
  return (
    <div className="cart-wrapper">
      <h2>Your Cart</h2>
      <ul className="cart">
        {cart.map((item, index) => {
          return <LineItem item={item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Cart;
