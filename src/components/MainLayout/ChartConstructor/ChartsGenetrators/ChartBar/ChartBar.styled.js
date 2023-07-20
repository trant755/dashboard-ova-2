import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";

export const BoxChartBarStyled = styled(Box)((props) => ({
  height: "100%",
  padding: "3px",

  backgroundColor: "#fff",
  borderRadius: "17px",
}));

export const ChartBarStyled = styled(Chart)((props) => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
}));
