import styled from "styled-components";
import { Container, PRIMARY } from "../../styles/theme.variables";

export const PrimaryNavContainer = styled.nav`
  width: 100%;
  height: 65px;
  background-color: ${PRIMARY};
  position: sticky;
  top: 0;
  z-index: 3;

  ${Container} {
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
`;

export const NavigationListContainer = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
`;

export const NavigationListItem = styled.li`
  padding: 0 1rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;

  input {
    border: none;
    outline: none;
    padding: 10px 12px;
    border-radius: 2px;
    min-width: 300px;
  }
`;
