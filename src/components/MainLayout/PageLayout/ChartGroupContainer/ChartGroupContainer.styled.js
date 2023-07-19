import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const BoxChartContainerStyled = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  overflow: "hidden",
}));

export const BoxTitleContainerStyled = styled(Box)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderRadius: "12px 12px 0 0",
  padding: "10px",
}));

export const BoxSubTitleContainerStyled = styled(Box)((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  pt: "12px",
  pb: "8px",
  backgroundColor: "#fff",
  // boxShadow: "inset 0 10px 10px -10px rgba(0,0,0,0.4)",
}));

export const TitleStyled = styled(Typography)((props) => ({
  fontFamily: "e-Ukraine",
  fontSize: "20px",
  fontWeight: "500",
}));
