import styled from 'styled-components';
import { PRIMARY_SEMI_DARK } from '../../styles/theme.variables';


export const PaginationContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 10px 0;

  .next, .previous, .page-item {
    width: 34px;
    height: 38px;
    display: flex;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.1);
    cursor: pointer;
    transition: 0.3s all;
    margin: 0 5px;

    &:hover {
      background-color: rgba(0,0,0, 0.09);
      border: 1px solid rgba(0,0,0, 0.09);
    }

    img {
      width: 20px;
      height: auto;
    }
  }

  .previous img {
    transform: rotate(180deg);
  }

  .page-item.active {
    background-color: ${PRIMARY_SEMI_DARK};
    color: white; 
  }
`;