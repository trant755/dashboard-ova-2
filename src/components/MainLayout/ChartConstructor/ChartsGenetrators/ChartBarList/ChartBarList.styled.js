import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";

export const BoxChartBarListStyled = styled(Box)((props) => ({
  height: "100%",
  padding: "3px",

  backgroundColor: "#fff",
  overflow: "hidden",
  borderRadius: "17px",
  m: "8px",
}));

export const ChartBarListStyled = styled(Chart)((props) => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
}));
