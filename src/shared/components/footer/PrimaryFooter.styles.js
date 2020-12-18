import styled from 'styled-components';
import { SECONDARY } from '../../styles/theme.variables';

export const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background-color: ${SECONDARY};
  display: flex;
  align-item: center;
  justify-content: space-between;

  p {
    color: white;
    font-size: 14px;
    margin: 0;
  }
`;
