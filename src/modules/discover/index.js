import React from 'react';
import { DiscoverPageContainer, DiscoverPageContent } from './discover.styles';
import PrimaryNav from '../../shared/components/navs/primary-nav.component';
import FooterContainer from '../../shared/components/footer/PrimaryFooter.component';
import IslandIcon from '../../assets/images/account/island.svg';

function DiscoverPage() {
  return (
    <DiscoverPageContainer>
      <PrimaryNav />
      <DiscoverPageContent>
        <div className='cloud-overlay'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={IslandIcon} alt='my island' className='island' />
        <div className='sea-overlay'></div>
      </DiscoverPageContent>
      <FooterContainer />
    </DiscoverPageContainer>
  );
}

export default DiscoverPage;
