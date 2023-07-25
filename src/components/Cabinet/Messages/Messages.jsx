import React, { useEffect, useState } from "react";

import * as SC from "./Messages.styled";
import MessageItem from "./MessageItem/MessageItem";
import { getDepMessages } from "API/depCabinet/depMessages";
import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSlice";

export const Messages = () => {
  // const [
  //   messages,
  //   // setMessages
  // ] = useState([
  //   {
  //     id: 1,
  //     title: "test message 1",
  //     sender: "Ivanov Viktor",
  //     date: "21.07.2023",
  //   },
  //   {
  //     id: 2,
  //     title: "test message 2",
  //     sender: "Ivanov Viktor",
  //     date: "21.07.2023",
  //   },
  //   {
  //     id: 3,
  //     title: "test message 3",
  //     sender: "Ivanov Viktor",
  //     date: "21.07.2023",
  //   },
  //   {
  //     id: 4,
  //     title: "test message 4",
  //     sender: "Ivanov Viktor",
  //     date: "21.07.2023",
  //   },
  //   {
  //     id: 5,
  //     title: "test message 5",
  //     sender: "Ivanov Viktor",
  //     date: "21.07.2023",
  //   },
  // ]);

  const token = useSelector(selectToken);
  console.log("token:", token);

  const [userMessages, setUserMessages] = useState([]);

  useEffect(() => {
    async function searchUserMesssages() {
      try {
        const result = await getDepMessages(token);
        setUserMessages(result.data.userMessages);
      } catch (error) {}
    }

    searchUserMesssages();
  }, [token]);

  return (
    <SC.MessagesContainer>
      <SC.MessagesList>
        {userMessages.map((item) => (
          <MessageItem key={item.id} message={item} />
        ))}
      </SC.MessagesList>
    </SC.MessagesContainer>
  );
};

export default Messages;
