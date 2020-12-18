import React from 'react';
import { MessagesPageContainer } from './account.styles';
import MessagesPanel from './messages-panel.component';
import ProfilePanel from './profile-panel.component';

function Messages() {
  return (
    <MessagesPageContainer>
      <ProfilePanel />
      <MessagesPanel />
    </MessagesPageContainer>
  );
}

export default Messages;
