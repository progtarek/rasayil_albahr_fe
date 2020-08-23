import React from 'react';
import { PageContainer } from '../../../shared/styles/global.styles';
import { useLocation } from 'react-router-dom';

const SocialLoginPage = ({ history }) => {
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
    history.push('/account');
  } else {
    history.push('/login');
  }

  return <PageContainer>...loading</PageContainer>;
};

export default SocialLoginPage;
