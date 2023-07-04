import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FilterSelects } from "components/MainLayout/ChartConstructor/AditionalSetings/FilterSelects/FilterSelects";
import { LayoutGrid } from "../LayoutGrid/LayoutGrid";

export const ChartGroupContainer = ({ chartGroup }) => {
  const [groupFilter, setGroupFilter] = useState([]);

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
      {chartGroup.filterSelects && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: "12px",
            pb: "8px",
            backgroundColor: "rgba(94, 53, 177, .6)",
            boxShadow: "inset 0 10px 10px -10px rgba(0,0,0,0.4)",
          }}
        >
          <FilterSelects
            filterSelects={chartGroup.filterSelects}
            data={chartGroup.charts[0].chartConfig.data}
            setGroupFilter={setGroupFilter}
          />
        </Box>
      )}
      <LayoutGrid charts={chartGroup.charts} groupFilter={groupFilter} />
    </Box>
  );
};
