import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  MessagesPanelHeader,
  MessagesPanelContainer,
  MessagesPanelCount,
} from './account.styles';
import MessagesList from './messages-list.component';
import { readAllMessagesAction } from '../../redux/actions/messages.action';

const calculatePaging = (source, paging) => {
  const { docs, limit, page } = paging;
  if (docs && docs.length) {
    if (source === 'end') {
      return docs.length === limit
        ? page * limit
        : (page - 1) * limit + docs.length;
    } else {
      return page === 1 ? 1 : (page - 1) * limit + 1;
    }
  }
};

function MessagesPanel({ messages, readAllMessages }) {
  useEffect(() => {
    readAllMessages();
  }, [readAllMessages]);

  return (
    <MessagesPanelContainer>
      <MessagesPanelHeader>Messages</MessagesPanelHeader>
      {messages.docs && messages.docs.length ? (
        <MessagesPanelCount>
          Display {calculatePaging('start', messages)} to{' '}
          {calculatePaging('end', messages)} of <b>{messages.total}</b> Messages
        </MessagesPanelCount>
      ) : null}
      <MessagesList />
    </MessagesPanelContainer>
  );
}

const mapStateToProps = ({ messages }) => ({
  messages,
});

const mapDispatchToProps = (dispatch) => ({
  readAllMessages: () => dispatch(readAllMessagesAction({ page: 1 })),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPanel);
