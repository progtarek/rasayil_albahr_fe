import React, { Component } from 'react';
import {
  PrimaryNavContainer,
  NavigationListContainer,
  NavigationListItem,
} from './navs.styles';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../../../assets/images/logo.svg';

export class PrimaryNav extends Component {
  render() {
    return (
      <PrimaryNavContainer>
        <Link to='/'>
          <img src={LOGO} alt='rasayil albahr' className='sea-message-logo' />
        </Link>

        <NavigationListContainer>
          <NavigationListItem>
            <NavLink to='/account/messages'>Messages</NavLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavLink to='/account/discover'>Discover</NavLink>
          </NavigationListItem>
        </NavigationListContainer>
      </PrimaryNavContainer>
    );
  }
}

export default PrimaryNav;
