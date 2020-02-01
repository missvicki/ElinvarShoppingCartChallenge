import React from 'react';
import './avaliable.css';

const AvailableProducts = ({ totalResults }) => (
  <div className="available__container">
    <div className="left__results">
      <div className="results__title">Available Products</div>
      <div data-testid="available-results">{`Showing 10 of ${totalResults} results`}</div>
    </div>
  </div>
);

export default AvailableProducts;
