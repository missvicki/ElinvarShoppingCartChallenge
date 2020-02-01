import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.css';

const Pagination = ({ totalPageCount, currentPage, onClickPage }) => (
  <div className="pagination">
    <div className="pagination__item">
      <Link
        to="#"
        onClick={onClickPage('first')}
        data-testid="first-link"
        disabled={currentPage === 1}
      >
        First
      </Link>
    </div>
    <div className="pagination__item">
      <Link
        to="#"
        onClick={onClickPage('previous')}
        data-testid="previous-link"
        disabled={currentPage === 1}
      >
        Previous
      </Link>
    </div>
    <div className="pagination__item" data-testid="page-count">
      {`Page ${currentPage} of ${totalPageCount}`}
    </div>
    <div className="pagination__item">
      <Link
        to="#"
        onClick={onClickPage('next')}
        data-testid="next-link"
        disabled={currentPage === totalPageCount}
      >
        Next
      </Link>
    </div>
    <div className="pagination__item">
      <Link
        to="#"
        onClick={onClickPage('last')}
        data-testid="last-link"
        disabled={currentPage === totalPageCount}
      >
        Last
      </Link>
    </div>
  </div>
);

export default Pagination;
