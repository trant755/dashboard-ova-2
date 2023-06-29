import React from "react";
import Chart from "react-apexcharts";
import { Box } from "@mui/material";

export const ChartBar = ({ chartConfig }) => {
  console.log(chartConfig);
  if (!chartConfig.options) {
    return <div>no data</div>;
  }
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Chart
        style={{
          backgroundColor: "rgb(237, 231, 246, 0.3)",
          borderRadius: "12px",
        }}
        options={chartConfig.options}
        series={chartConfig.series}
        type={chartConfig.type}
        height={"100%"}
      />
    </Box>
  );
};
