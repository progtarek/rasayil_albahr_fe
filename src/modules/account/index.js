import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import PrimaryNav from '../../shared/components/navs/primary-nav.component';
import { AccountPageContainer, AccountPageContent } from './account.styles';
import FooterContainer from '../../shared/components/footer/PrimaryFooter.component';
import Messages from './Messages.component';
import NearBy from './NearBy.component';

const AccountPage = () => {
  let match = useRouteMatch();

  return (
    <AccountPageContainer>
      <PrimaryNav />
      {/**  TODO move below items to near by page*/}
      {/* <AccountPageContainer>
        <img src={ISLAND} alt='my island' />
      </AccountPageContainer>
      <TailorContent></TailorContent> */}
      <AccountPageContent>
        <Switch>
          <Route exact path={`${match.path}/messages`}>
            <Messages />
          </Route>
          <Route exact path={`${match.path}/near-by`}>
            <NearBy />
          </Route>
          <Route path='/'>
            <Redirect to='/account/messages' />
          </Route>
        </Switch>
      </AccountPageContent>
      <FooterContainer />
    </AccountPageContainer>
  );
};

export default AccountPage;
