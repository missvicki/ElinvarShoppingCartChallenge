/* eslint-disable react/button-has-type */
import React from 'react';
import './productListItem.css';

const ProductListItem = ({
  addToCart,
  id,
  name,
  description,
  unitPrice,
  unitsInStock,
  image
}) => (
  <div className="product__item">
    <div className="product__item__image">
      <img src={image} width="150px" />
    </div>
    <div className="product-details">
      <span className="product__name" data-testid="product-model-name">
        {name}
      </span>
      <span className="product__description" data-testid="product-description">
        {`Unit Price: ${unitPrice}`}
      </span>
      <span className="product__description" data-testid="product-description">
        {` Items Left: ${unitsInStock} `}
      </span>
      <span className="product__description" data-testid="product-description">
        {`${description}`}
      </span>
      <button className="cart-button" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductListItem;
