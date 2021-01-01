import React, { useEffect, useState } from 'react';
import { DiscoverPageContainer, DiscoverPageContent } from './discover.styles';
import PrimaryNav from '../../shared/components/navs/primary-nav.component';
import FooterContainer from '../../shared/components/footer/PrimaryFooter.component';
import { Users } from '../../agent';
import Island from '../../shared/components/island/island.component';

function DiscoverPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const discover = async (coordinates) => {
      const users = await Users.discover(coordinates);
      console.log(users);
      setUsers(users);
    };
    navigator.geolocation.getCurrentPosition(function (position) {
      discover({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
  }, []);
  return (
    <DiscoverPageContainer>
      <PrimaryNav />
      <Island />
      <FooterContainer />
    </DiscoverPageContainer>
  );
}

export default DiscoverPage;
