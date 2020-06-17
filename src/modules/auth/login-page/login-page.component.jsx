import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageContainer } from '../../../shared/styles/global.styles';

const LoginPage = () => {
  return (
    <PageContainer>
      <NavLink to='/'>home</NavLink>
    </PageContainer>
  );
};

export default LoginPage;
