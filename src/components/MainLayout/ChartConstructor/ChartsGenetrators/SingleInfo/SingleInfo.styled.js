import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const BoxSingleInfoStyled = styled(Box)((props) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "3px",

  backgroundColor: "#fff",
  borderRadius: "17px",
}));

export const TypographyTitleStyled = styled(Typography)((props) => ({
  fontSize: "24px",
  textAlign: "center",
  color: "#000",
}));

export const TypographySubTitleStyled = styled(Typography)((props) => ({
  fontSize: "26px",
  textAlign: "center",
  color: "#000",
}));
