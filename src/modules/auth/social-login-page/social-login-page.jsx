import React from 'react';
import { PageContainer } from '../../../shared/styles/global.styles';
import { useLocation } from 'react-router-dom';
import { push } from 'connected-react-router';

const SocialLoginPage = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const token = searchParams.get('token');
  const username = searchParams.get('username');
  const profilePictureUrl = searchParams.get('profilePictureUrl');
  console.log('========================');
  console.log(token, username, profilePictureUrl);
  console.log('========================');
  searchParams.delete(token);
  searchParams.delete(username);
  searchParams.delete(profilePictureUrl);
  window.localStorage.setItem('token', token);
  window.localStorage.setItem('username', username);
  window.localStorage.setItem('profilePictureUrl', username);
  if (!token || !username) {
    push('/');
  } else {
    push('/account');
    push('/account');
  }

  return <PageContainer>...loading</PageContainer>;
};

export default SocialLoginPage;
