import styled from 'styled-components';
import { PRIMARY, PRIMARY_DARK } from './theme.variables';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 100%;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &.btn-primary {
    background-color: ${PRIMARY};
    color: #fff;

    &:hover {
      background-color: ${PRIMARY_DARK};
    }
  }
`;

export const FunkyButton = styled.h3`
  font-size: 40px;
  font-weight: 300;
  margin: 0;
  margin-bottom: 12px;
  font-family: 'Pacifico', cursive;
  line-height: 3rem;
  color: ${PRIMARY};
`;
