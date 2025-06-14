import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="main-header">
      <Link to="/products" className="logo">GrowSpace Co.</Link>
      <nav>
        <Link to="/">Home</Link> {/* ✅ Link to landing page */}
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒 ({totalQuantity})</Link>
      </nav>
    </header>
  );
};

export default Header;
