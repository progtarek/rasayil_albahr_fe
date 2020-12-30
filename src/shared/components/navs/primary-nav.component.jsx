import React, { Component } from 'react';
import {
  PrimaryNavContainer,
  NavigationListContainer,
  NavigationListItem,
  SearchContainer,
} from './navs.styles';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../../../assets/images/logo.svg';
import { Container } from '../../styles/theme.variables';

export class PrimaryNav extends Component {
  render() {
    return (
      <PrimaryNavContainer>
        <Container>
          <Link to='/'>
            <img src={LOGO} alt='rasayil albahr' className='sea-message-logo' />
          </Link>

          <SearchContainer>
            <input id='search' type='search' autoComplete='false' />
          </SearchContainer>

          <NavigationListContainer>
            <NavigationListItem>
              <NavLink to='/messages'>Messages</NavLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavLink to='/discover'>Discover</NavLink>
            </NavigationListItem>
          </NavigationListContainer>
        </Container>
      </PrimaryNavContainer>
    );
  }
}

export default PrimaryNav;
