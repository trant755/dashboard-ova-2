import React, { useState } from "react";
import { Box } from "@mui/material";

export const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "test message 1",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
    {
      id: 2,
      title: "test message 2",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
    {
      id: 3,
      title: "test message 3",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
    {
      id: 4,
      title: "test message 4",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
    {
      id: 5,
      title: "test message 5",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
  ]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Messages component</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {messages.map((elem) => {
          return (
            <li
              key={elem.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>{elem.title}</p>
              <p>{elem.sender}</p>
              <p>{elem.date}</p>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default Messages;
