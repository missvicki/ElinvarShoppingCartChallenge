import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';
import Header from '../layout/shared/Header';
import Footer from '../layout/shared/Footer';

function NotFound() {
  return (
    <>
      <Header />
      <div className="not_found__container">
        <h1 data-testid="404-text">404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>
          You can always go back to the
          <Link to="/">homepage</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
