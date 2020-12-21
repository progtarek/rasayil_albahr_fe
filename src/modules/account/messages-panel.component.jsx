import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  MessagesPanelHeader,
  MessagesPanelContainer,
  MessagesPanelCount,
} from './account.styles';
import MessagesList from './messages-list.component';
import { readAllMessagesAction } from '../../redux/actions/messages.action'

function MessagesPanel({ messages, readAllMessages }) {
  useEffect(() => {
    readAllMessages();
  }, [])

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


const mapStateToProps = ({ messages }) => ({
  messages
});

const mapDispatchToProps = (dispatch) => ({
  readAllMessages: () => dispatch(readAllMessagesAction({ page: 1 }))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPanel);
