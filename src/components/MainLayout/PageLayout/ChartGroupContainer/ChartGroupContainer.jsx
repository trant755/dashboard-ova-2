import { Box, Typography } from "@mui/material";
import { LayoutGrid } from "../LayoutGrid/LayoutGrid";

export const ChartGroupContainer = ({ chartGroup }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #fff",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: "12px 12px 0 0",
          padding: "10px",
        }}
      >
        <Typography>{chartGroup.title}</Typography>
      </Box>
      <LayoutGrid charts={chartGroup.charts} />
    </Box>
  );
};
