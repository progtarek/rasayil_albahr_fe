import styled from 'styled-components';
import { PRIMARY } from '../../styles/theme.variables';

export const PrimaryNavContainer = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${PRIMARY};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: sticky;
  top: 0;
  z-index: 3;
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
