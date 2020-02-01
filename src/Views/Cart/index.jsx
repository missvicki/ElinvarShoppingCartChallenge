import React from 'react';
import './cart.css';
import Header from '../layout/shared/Header';
import Footer from '../layout/shared/Footer';
import Product from '../../Components/Product';

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart, 'cart');
  const calculatePrice = () => {
    return cart.reduce((price, product) => price + product.unitPrice, 0);
  };
  return (
    <>
      <Header />
      <div className="show__container">
        <div className="show__content">
          <div className="show__product_details">
            <h1 data-testid="product-model">Shopping Cart</h1>
            <div
              className="show__product_subtitle"
              data-testid="product-details"
            >
              {`YOUR CART TOTAL: ${calculatePrice()}`}

              {cart.map((product, index) => (
                <Product key={product.productID} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
