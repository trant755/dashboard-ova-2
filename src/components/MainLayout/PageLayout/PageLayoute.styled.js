import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PageLayoutContainerStyled = styled(Box)((props) => ({
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  position: "relative",
}));

export const PageLayoutTabsContainerStyled = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderRadius: "0 0 12px 12px",
  position: "relative",
  boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
  mr: { lg: "32px" },
  ml: { lg: "32px" },
  // top: { sm: "-8px", lg: "-20px" },
  left: "0",
  top: "-20px",
}));
