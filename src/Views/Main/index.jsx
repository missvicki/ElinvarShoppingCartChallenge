import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';

import AvailableProducts from '../AvailableProducts';
import ProductList from '../List';
import Pagination from '../../Components/Pagination';
import './main.css';

function Main() {
  const [products, setProducts] = useState([]);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get(
      'https://private-3efa8-products123.apiary-mock.com/products'
    );
    const data = response.data;
    setProducts(data.products);
    setTotalProductsCount(data.products.length);
    setTotalPageCount(Math.ceil(data.products.length / 10));
    setLoading(false);
  };

  const onClickPage = page => () => {
    if (page === 'first') {
      setCurrentPage(1);
    }
    if (page === 'next') {
      if (currentPage >= 1 && currentPage < totalPageCount) {
        const setPage = currentPage + 1;
        setCurrentPage(setPage);
      }
    }
    if (page === 'previous') {
      if (currentPage > 1 && currentPage <= totalPageCount) {
        const setPage = currentPage - 1;
        setCurrentPage(setPage);
      }
    }
    if (page === 'last') {
      setCurrentPage(totalPageCount);
    }
    return fetchProducts();
  };

  // shopping cart
  const addToCart = async index => {
    await setCart(cart.concat(products[index]));
    // const cartItems = [];
    // cartItems.push();
    localStorage.setItem('cart', JSON.stringify(cart.concat(products[index])));

    // update value of cart items
    $('.icon').html(parseInt($('.icon').html(), 10) + 1);
  };

  // get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <div className="container">
      <div className="main-content">
        <AvailableProducts totalResults={totalProductsCount} />
        <ProductList
          loading={loading}
          products={currentProducts}
          addToCart={addToCart}
        />
        <div />
        <div className="main__pagination">
          <Pagination
            totalPageCount={totalPageCount}
            currentPage={currentPage}
            onClickPage={onClickPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
