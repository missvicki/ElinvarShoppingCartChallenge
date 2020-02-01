import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header data-testid="header">
    <nav className="nav">
      <Link to="/" className="logo" data-testid="logo">Elinvar Shop</Link>
      <ul className="nav-right">
      <li>
          <a href="#" className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            Products
          </a>
        </li>
        <li>
          <Link to="/orders" className="nav-item" data-testid="fav-link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
