import React, { useState } from 'react';
import { connect } from 'react-redux';
import SocialBar from '../../shared/components/social-bar/social-bar.component';
import {
  updateUserStatusAction,
  uploadProfilePictureAction,
} from '../../redux/actions/auth.action';
import {
  ProfilePanelUser,
  ProfilePanelStatus,
  ProfilePanelContainer,
  ProfilePanelShareContainer,
  ProfilePanelCoverContainer,
  ModalHeaderContainer,
  ModalBodyContainer,
} from './account.styles';
import EditIcon from '../../assets/images/common/edit.svg';
import Modal from '../../shared/styles/modal/modal.component';
import OctopusIcon from '../../assets/images/common/octopus.svg';
import {
  FormGroup,
  FormLabel,
  TextArea,
} from '../../shared/components/forms/inputs/input.styles';

function ProfilePanel({ profile, uploadProfilePicture, updateUserStatus }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [status, setStatus] = useState('');

  return (
    <ProfilePanelContainer>
      <ProfilePanelCoverContainer src={profile.profilePictureUrl}>
        <input
          type='file'
          id='profilePicture'
          onChange={(event) => uploadProfilePicture(event.target.files[0])}
        />
        <label htmlFor='profilePicture'></label>
      </ProfilePanelCoverContainer>
      <ProfilePanelUser>@{profile.username}</ProfilePanelUser>
      <ProfilePanelStatus>
        {profile.status || `Hello I'am using sea messages`}
        <img
          src={EditIcon}
          alt='Edit status'
          onClick={() => setModalVisibility(true)}
        />
      </ProfilePanelStatus>
      <ProfilePanelShareContainer>
        <h3 className='header'>Share your profile to receive messages</h3>
        <SocialBar></SocialBar>
      </ProfilePanelShareContainer>
      <Modal
        visible={modalVisibility}
        primary='Update'
        secondary='Cancel'
        onCancel={() => setModalVisibility(false)}
        onConfirm={() => {
          setModalVisibility(false);
          return updateUserStatus(status);
        }}
      >
        <ModalHeaderContainer>
          <img src={OctopusIcon} alt='Update status' />
        </ModalHeaderContainer>
        <ModalBodyContainer>
          <FormGroup>
            <FormLabel>Status:*</FormLabel>
            <TextArea
              rows={3}
              maxLength={100}
              minLength={4}
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            ></TextArea>
          </FormGroup>
        </ModalBodyContainer>
      </Modal>
    </ProfilePanelContainer>
  );
}

const mapStateToProps = ({ auth }) => ({
  profile: auth,
});

const mapDispatchToProps = (dispatch) => ({
  uploadProfilePicture: (file) => dispatch(uploadProfilePictureAction(file)),
  updateUserStatus: (status) => dispatch(updateUserStatusAction({ status })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePanel);
