import styled from 'styled-components';
import { Container, SECONDARY } from '../../styles/theme.variables';

export const FooterContainer = styled.footer`
  padding: 1rem 0;
  background-color: ${SECONDARY};

  ${Container} {
    display: flex;
    align-item: center;
    justify-content: space-between;
  }

  p {
    color: white;
    font-size: 14px;
    margin: 0;
  }

  @media (min-width: 300px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;
