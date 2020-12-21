import styled from "styled-components";
import { PRIMARY_SEMI_DARK } from "../../styles/theme.variables";

export const PaginationContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 10px 0;

  .next,
  .previous,
  .page-item,
  .ellipsis {
    width: 30px;
    height: 34px;
    display: flex;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.3s all;
    margin: 0 5px;
    font-size: 14px;
    user-select: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
      border: 1px solid rgba(0, 0, 0, 0.09);
    }

    img {
      width: 15px;
      height: auto;
    }
  }

  .ellipsis {
    cursor: disabled;
  }

  .previous img {
    transform: rotate(180deg);
  }

  .page-item.active {
    background-color: ${PRIMARY_SEMI_DARK};
    color: white;
  }
`;
