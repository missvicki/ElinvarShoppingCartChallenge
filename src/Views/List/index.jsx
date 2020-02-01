import React from 'react';
import ProductListItem from '../../Components/ProductListItem';
import Placeholder from '../../Components/Placeholder';

const ProductList = ({ loading, products, addToCart }) => (
  <>
    {loading && <Placeholder />}
    {products &&
      products.length > 0 &&
      products.map(product => (
        <ProductListItem
          key={product.productID}
          id={product.productID}
          name={product.name}
          description={product.description}
          unitPrice={product.unitPrice}
          unitsInStock={product.unitsInStock}
          image={product.image}
          addToCart={addToCart}
        />
      ))}
  </>
);

export default ProductList;
