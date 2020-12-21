import React from 'react';
import { PaginationContainer } from './pagination.styles';
import ArrowIcon from '../../../assets/images/common/arrow.svg';
import { setupPagination } from '../../../helpers';

function Pagination({ limit, page, pages, onPageTo }) {
  return (
    <PaginationContainer>
      <a className='previous' onClick={() => onPageTo({ page: page - 1 })}>
        <img src={ArrowIcon} alt='previous' />
      </a>

      {setupPagination(page, pages).map((item, index) =>
        item !== '...' ? (
          <span
            className={`page-item ${item === page ? 'active' : null}`}
            key={index}
            onClick={() => onPageTo({ page: item, limit })}
          >
            {item}
          </span>
        ) : (
          <span className='ellipsis' key={index} disabled />
        )
      )}

      <a
        className='next'
        disabled={true}
        onClick={() => onPageTo({ page: page + 1 })}
      >
        <img src={ArrowIcon} alt='next' />
      </a>
    </PaginationContainer>
  );
}

export default Pagination;
