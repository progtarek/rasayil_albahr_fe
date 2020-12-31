import React from 'react';
import PrimaryNav from '../../shared/components/navs/primary-nav.component';
import {
  AccountPageContainer,
  AccountPageContent,
  MessagesPageContainer,
} from './account.styles';
import FooterContainer from '../../shared/components/footer/PrimaryFooter.component';
import MessagesPanel from './messages-panel.component';
import ProfilePanel from './profile-panel.component';
const AccountPage = () => {
  return (
    <AccountPageContainer>
      <PrimaryNav />
      <AccountPageContent className='tarek'>
        <MessagesPageContainer>
          <ProfilePanel />
          <MessagesPanel />
        </MessagesPageContainer>
      </AccountPageContent>
      <FooterContainer />
    </AccountPageContainer>
  );
};

export default AccountPage;
