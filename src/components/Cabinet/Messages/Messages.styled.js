import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MessagesContainer = styled(Box)((props) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const MessagesList = styled("ul")((props) => ({
  width: "100%",
  height: "75vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  margin: "0",
  borderRadius: "12px",
  border: "3px solid #000",
}));

export const MessagesItem = styled("li")((props) => ({
  width: "100%",
  padding: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "56px",

  borderBottom: "3px solid #000",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.20)",
}));

export const MessagesTitle = styled("p")((props) => ({
  color: "#000",
  fontFamily: "e-Ukraine",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  textTransform: "capitalize",
}));

export const MessagesDescription = styled("p")((props) => ({
  color: "rgba(0, 0, 0, 0.50)",
  fontFamily: "e-Ukraine",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
}));
