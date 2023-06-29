import React from "react";
import Chart from "react-apexcharts";
import { Box } from "@mui/material";

export const ChartDonut = ({ chartConfig }) => {
  if (!chartConfig.options) {
    return <div>no data</div>;
  }
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "rgb(237, 231, 246, 0.3)",
        borderRadius: "12px",
        padding: "12px",
      }}
    >
      <Chart
        style={{
          backgroundColor: "transparent",
        }}
        options={chartConfig.options}
        series={chartConfig.series}
        type={chartConfig.type}
        height={"100%"}
      />
    </Box>
  );
};
