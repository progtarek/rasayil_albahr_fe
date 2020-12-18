import React from 'react';
import Pagination from '../../shared/components/pagination/pagination.component';
import { MessagesListContainer } from './account.styles';
import MessageCard from './message-card.component';

function MessagesList() {
  return (
    <MessagesListContainer>
      {[1, 2, 3].map((message) => (
        <MessageCard></MessageCard>
      ))}

      <Pagination></Pagination>
    </MessagesListContainer>
  );
}

export default MessagesList;
