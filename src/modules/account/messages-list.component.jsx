import React from "react";
import Pagination from "../../shared/components/pagination/pagination.component";
import { MessagesListContainer } from "./account.styles";
import MessageCard from "./message-card.component";
import { connect } from "react-redux";
import { readAllMessagesAction } from "../../redux/actions/messages.action";
import { Messages } from "../../agent";

function MessagesList({ messages, readAllMessages }) {
  const deleteMessage = async (id) => {
    try {
      await Messages.deleteMessage(id);
      readAllMessages({ page: 1 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MessagesListContainer>
      {messages.docs && messages.docs.length
        ? messages.docs.map((message, index) => (
            <MessageCard
              key={index}
              {...message}
              deleteMessage={deleteMessage}
            />
          ))
        : null}

      <Pagination {...messages} onPageTo={readAllMessages} />
    </MessagesListContainer>
  );
}

const mapStateToProps = ({ messages }) => ({
  messages,
});

const mapDispatchToProps = (dispatch) => ({
  readAllMessages: ({ page }) => dispatch(readAllMessagesAction({ page })),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
