import React from 'react';
import { connect } from 'react-redux';
import SocialBar from '../../shared/components/social-bar/social-bar.component';
import {
  ProfilePanelUser,
  ProfilePanelStatus,
  ProfilePanelContainer,
  ProfilePanelShareContainer,
  ProfilePanelCoverContainer,
} from './account.styles';

function ProfilePanel({ profile }) {
  return (
    <ProfilePanelContainer>
      <ProfilePanelCoverContainer src={profile.profilePictureUrl} />
      <ProfilePanelUser>@{profile.username}</ProfilePanelUser>
      <ProfilePanelStatus>
        {profile.status || `Hello I'am using sea messages`}
      </ProfilePanelStatus>
      <ProfilePanelShareContainer>
        <h3 className='header'>Share your profile to receive messages</h3>
        <SocialBar></SocialBar>
      </ProfilePanelShareContainer>
    </ProfilePanelContainer>
  );
}

const mapStateToProps = ({ auth }) => ({
  profile: auth
});

export default connect(mapStateToProps)(ProfilePanel);
