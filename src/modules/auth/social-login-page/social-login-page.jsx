import React from 'react';
import { PageContainer } from '../../../shared/styles/global.styles';
import { useLocation } from 'react-router-dom';
import { LOGIN_SUCCESS } from '../../../redux/constants/actionTypes';
import { connect } from 'react-redux';

const SocialLoginPage = ({ history, storeUser }) => {
  const searchParams = new URLSearchParams(useLocation().search);

  const token = searchParams.get('token');
  const username = searchParams.get('username');
  const profilePictureUrl = searchParams.get('profilePictureUrl');

  if (token && username) {
    window.localStorage.setItem('token', decodeURIComponent(token));
    window.localStorage.setItem('username', decodeURIComponent(username));
    window.localStorage.setItem(
      'profilePictureUrl',
      decodeURIComponent(profilePictureUrl)
    );
    storeUser({ username, token, profilePictureUrl });
    history.push('/account');
  } else {
    history.push('/login');
  }

  return <PageContainer>...loading</PageContainer>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeUser: (user) => dispatch({ type: LOGIN_SUCCESS, payload: user }),
  };
};

export default connect(null, mapDispatchToProps)(SocialLoginPage);
