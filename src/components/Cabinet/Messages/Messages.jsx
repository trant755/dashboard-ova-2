import React, { useState } from "react";
import { Box } from "@mui/material";

export const Messages = () => {
  const [
    messages,
    // setMessages
  ] = useState([
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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          width: "100%",
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          margin: "0",
          borderRadius: "12px",
          border: "3px solid #000",
        }}
      >
        {messages.map((elem) => {
          return (
            <li
              key={elem.id}
              style={{
                width: "100%",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "56px",

                borderBottom: "3px solid #000",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.20)",
              }}
            >
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontFamily: "e-Ukraine",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                {elem.sender}
              </p>
              <p
                style={{
                  color: "#000",
                  fontFamily: "e-Ukraine",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  textTransform: "capitalize",
                }}
              >
                {elem.title}
              </p>
              <p
                style={{
                  marginLeft: "auto",
                  color: "rgba(0, 0, 0, 0.50)",
                  fontFamily: "e-Ukraine",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                {elem.date}
              </p>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default Messages;
