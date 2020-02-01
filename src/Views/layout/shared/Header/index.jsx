import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => (
  <header data-testid="header">
    <nav className="nav">
      <Link to="/" className="logo" data-testid="logo">
        Elinvar Shop
      </Link>
      <ul className="nav-right">
        <li>
          <a href="/" className="nav-item">
            All Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            Top-5 Viewed
          </a>
        </li>
        <li>
          <Link to="/orders" className="nav-item" data-testid="fav-link">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="icon" id="icon">
              0
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
