import styled from "@emotion/styled";

import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const ModalMessagesWindow = styled("div")((props) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "auto",
  padding: "60px 20px 40px 20px",

  background: "#fff",
  borderRadius: "20px",

  width: "768px",

  //   @media screen and (min-width: 320px) {
  //     width: "280px",
  //   }

  //   @media screen and (min-width: 768px) {
  //     width: "704px",
  //     padding: "32px 20px",
  //   }
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "20px",
  right: "20px",
  margin: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px",
  color: "#000",
  cursor: "pointer",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "all 0.2s ease-in-out 0s",
  outline: "3px solid #000",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.027)",
  },
}));

export const MenuOpenIcon = styled(MenuIcon)(({ theme }) => ({
  color: "#000",
  fontSize: "1.2rem",
}));
export const MenuCloseIcon = styled(CloseIcon)(({ theme }) => ({
  color: "#000",
  fontSize: "1.2rem",
}));
