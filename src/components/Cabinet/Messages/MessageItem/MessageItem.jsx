import { useState } from "react";

import { Modal } from "components/Modal/Modal";
import ModalMessages from "../ModalMessages/ModalMessages";
import * as SC from "./MessageItem.styled";

const MessageItem = ({ message }) => {
  const [showMessagesDetails, setShowMessagesDetails] = useState(false);

  const onMessageClick = () => {
    setShowMessagesDetails(!showMessagesDetails);
  };

  const dateTransformer = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <>
      <SC.MessagesItem onClick={onMessageClick}>
        <SC.MessagesDescription style={{ width: "200px" }}>
          {message.senderName}
        </SC.MessagesDescription>
        <SC.MessagesTitle>{message.title}</SC.MessagesTitle>
        <SC.MessagesDescription style={{ marginLeft: "auto" }}>
          {dateTransformer(message.createdAt)}
        </SC.MessagesDescription>
      </SC.MessagesItem>

      {showMessagesDetails && (
        <Modal onClose={onMessageClick}>
          <ModalMessages message={message} onClose={onMessageClick} />
        </Modal>
      )}
    </>
  );
};

export default MessageItem;
