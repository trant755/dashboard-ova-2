import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";

export const BoxDonutStyled = styled(Box)((props) => ({
  height: "100%",
  padding: "3px",

  backgroundColor: "#fff",
  borderRadius: "17px",
}));

export const DonutBarStyled = styled(Chart)((props) => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
}));
