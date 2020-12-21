import styled from "styled-components";
import { Container, SECONDARY } from "../../styles/theme.variables";

export const FooterContainer = styled.footer`
  padding: 1rem 2rem;
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
`;
