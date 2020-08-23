import React from 'react';
import { PageContainer } from '../../../shared/styles/global.styles';
import { useLocation } from 'react-router-dom';

const SocialLoginPage = () => {
  const params = new URLSearchParams(useLocation().search);
  console.log(params);
  return <PageContainer>logging in with</PageContainer>;
};

export default SocialLoginPage;
