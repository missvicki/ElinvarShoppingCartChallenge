import React from 'react';
import './product.css';

const Product = props => {
  const { product, children } = props;
  return (
    <div className="products">
      <div className="product">
        <h6>{`Product Name: ${product.name}`}</h6>
        <h6>{`Price: ${product.unitPrice}`}</h6>
      </div>
      {children}
    </div>
  );
};

export default Product;
