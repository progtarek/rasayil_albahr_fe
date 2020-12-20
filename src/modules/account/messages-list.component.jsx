import React from 'react';
import Pagination from '../../shared/components/pagination/pagination.component';
import { MessagesListContainer } from './account.styles';
import MessageCard from './message-card.component';
import { connect } from 'react-redux';


function MessagesList({ messages }) {
  return (
    <MessagesListContainer>
      {messages.docs && messages.docs.length ? messages.docs.map((message, index) => (
        <MessageCard key={index} {...message} />
      )) : null}

      <Pagination {...messages} />
    </MessagesListContainer>
  );
}

const mapStateToProps = ({ messages }) => ({
  messages
});

export default connect(mapStateToProps)(MessagesList);
