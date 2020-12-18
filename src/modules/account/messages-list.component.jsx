import React from 'react';
import { MessagesListContainer } from './account.styles';
import MessageCard from './message-card.component';

function MessagesList() {
  return (
    <MessagesListContainer>
      {[1, 2, 3].map((message) => (
        <MessageCard></MessageCard>
      ))}
    </MessagesListContainer>
  );
}

export default MessagesList;
