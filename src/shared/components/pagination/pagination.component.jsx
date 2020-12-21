import React from "react";
import { PaginationContainer } from "./pagination.styles";
import ArrowIcon from "../../../assets/images/common/arrow.svg";
import { setupPagination } from "../../../helpers";

function Pagination({ limit, page, pages, onPageTo }) {
  return (
    <PaginationContainer>
      <div
        className={`previous ${page === 1 ? "disabled" : null}`}
        onClick={() => (page === 1 ? null : onPageTo({ page: page - 1 }))}
      >
        <img src={ArrowIcon} alt="previous" />
      </div>

      {setupPagination(page, pages).map((item, index) =>
        item !== "..." ? (
          <span
            className={`page-item ${item === page ? "active" : null}`}
            key={index}
            onClick={
              item === page ? null : () => onPageTo({ page: item, limit })
            }
          >
            {item}
          </span>
        ) : (
          <span className="ellipsis" key={index} />
        )
      )}

      <div
        className={`next ${page === pages ? "disabled" : null}`}
        onClick={() => (page === pages ? null : onPageTo({ page: page + 1 }))}
      >
        <img src={ArrowIcon} alt="next" />
      </div>
    </PaginationContainer>
  );
}

export default Pagination;
