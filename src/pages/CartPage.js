import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const { items, totalPrice, totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ${totalPrice}</p>

      {items.length === 0 ? <p>Your cart is empty.</p> : (
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button className="checkout">Checkout (Coming Soon)</button>
        <Link to="/products" className="continue">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default CartPage;
