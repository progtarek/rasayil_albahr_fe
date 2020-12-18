import React from 'react';
import {
  MessagesPanelHeader,
  MessagesPanelContainer,
  MessagesPanelCount,
} from './account.styles';
import MessagesList from './messages-list.component';

function MessagesPanel() {
  return (
    <MessagesPanelContainer>
      <MessagesPanelHeader>Messages</MessagesPanelHeader>
      <MessagesPanelCount>
        Display 1 to 10 of <b>203</b> Messages
      </MessagesPanelCount>
      <MessagesList />
    </MessagesPanelContainer>
  );
}

export default MessagesPanel;
