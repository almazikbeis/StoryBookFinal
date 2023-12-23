
import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} onClick={() => onPageChange(i)} className={currentPage === i ? 'active' : ''}>
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <ul className="pagination">
      {renderPageNumbers()}
    </ul>
  );
};

export default Pagination;
