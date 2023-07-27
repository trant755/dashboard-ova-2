import { useState } from "react";

import { Modal } from "components/Modal/Modal";
import ModalMessages from "../ModalMessages/ModalMessages";
import { useMediaQuery } from "@mui/material";
import * as SC from "./MessageItem.styled";

import { dateTransformer } from "components/helpers/workWithDate";

const MessageItem = ({ message }) => {
  const [showMessagesDetails, setShowMessagesDetails] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const isMediumScreen = useMediaQuery("(max-width: 899px)");

  const onMessageClick = () => {
    setShowMessagesDetails(!showMessagesDetails);
  };

  return (
    <>
      <SC.MessagesItem onClick={onMessageClick}>
        <SC.MessagesDescription
          style={{
            width: isSmallScreen ? "120px" : "220px",
            fontSize: isSmallScreen ? "12px" : "14px",
          }}
        >
          {isMediumScreen
            ? message.senderName.substring(0, 10)
            : message.senderName.substring(0, 17)}
        </SC.MessagesDescription>
        <SC.MessagesTitle
          style={{
            fontSize: isSmallScreen ? "12px" : "14px",
          }}
        >
          {isMediumScreen
            ? message.title.substring(0, 30) + "..."
            : message.title}
        </SC.MessagesTitle>
        <SC.MessagesDescription
          style={{
            marginLeft: "auto",
            fontSize: isSmallScreen ? "12px" : "14px",
          }}
        >
          {isSmallScreen
            ? dateTransformer(message.createdAt).substring(0, 10)
            : dateTransformer(message.createdAt)}
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
