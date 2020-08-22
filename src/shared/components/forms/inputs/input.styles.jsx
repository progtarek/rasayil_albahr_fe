import styled from 'styled-components';
import { PRIMARY, PRIMARY_DARK } from '../../../styles/theme.variables';

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const Field = styled.input`
  box-sizing: border-box;
  overflow: visible;
  display: block;
  width: 100%;
  outline: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  height: calc(1.5em + 0.75rem + 2px);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &.invalid {
    border: 1px solid #dc3545;

    &:focus {
      border-color: #dc3545;
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
  }

  &:focus,
  &:active {
    color: ${PRIMARY_DARK};
    background-color: #fff;
    border-color: ${PRIMARY};
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(140, 228, 234, 0.5);
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: -7px;
  margin-bottom: 1.2rem;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

export const CheckboxField = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${({ checked }) => (checked ? PRIMARY : '#fff')};
  border-radius: 3px;
  margin-right: 8px;
  border-radius: 4px;
  border: 1px solid ${({ checked }) => (checked ? PRIMARY : '#cdcdd9')};
  transition: 0.3s all;

  span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    left: 3px;
    bottom: 2px;
    transition: 0.3s all;
  }
`;
