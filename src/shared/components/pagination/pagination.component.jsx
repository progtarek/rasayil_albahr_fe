import React from 'react'
import { PaginationContainer } from './pagination.styles';
import ArrowIcon from '../../../assets/images/common/arrow.svg';
import { setupPagination } from '../../../helpers'


function Pagination({ limit, page, pages, onPageTo }) {
  return (
    <PaginationContainer>
      <div className='previous'>
        <img src={ArrowIcon} alt='previous' />
      </div>


      {setupPagination(page, pages).map((item, index) =>
        item !== '...' ? (
          <Pagination.Item
            key={index}
            active={item === page}
            onClick={() => onPageTo({ page: item, limit })}
          >
            {item}
          </Pagination.Item>
        ) : (
            <Pagination.Ellipsis key={index} disabled />
          )
      )}


      <span className='page-item'>1</span>
      <span className='page-item active'>2</span>
      <span className='page-item'>3</span>
      <div className='next'>
        <img src={ArrowIcon} alt='next' />
      </div>
    </PaginationContainer>
  )
}

export default Pagination;
