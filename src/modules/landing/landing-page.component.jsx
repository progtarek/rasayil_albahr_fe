import React from 'react';
import { PageContainer } from '../../shared/styles/global.styles';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <PageContainer>
      <NavLink to='/login'>login</NavLink>
    </PageContainer>
  );
};

export default LandingPage;
