import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ChartsGenetrators from "./ChartsGenetrators";
import * as SC from "./ChartConstructor.styled";
import { AditionalSetings } from "./AditionalSetings/AditionalSetings";

export const ChartConstructor = ({ chart }) => {
  const [filter, setFilter] = useState([]);
  if (!chart) {
    return null;
  }
  const TypeChart = ChartsGenetrators[chart?.chartConfig.type];
  const { aditionalSetings = null } = chart?.chartConfig;

  return (
    <SC.CahrtConstructorWrapper>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: "5",
        }}
      >
        {chart.title && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: "8px",
            }}
          >
            <Typography sx={{ color: "#fff" }}>{chart.title}</Typography>
          </Box>
        )}
        {aditionalSetings && (
          <AditionalSetings
            setFilter={setFilter}
            aditionalSetings={aditionalSetings}
          />
        )}
        <TypeChart filter={filter} chartConfig={chart.chartConfig} />
      </Box>
    </SC.CahrtConstructorWrapper>
  );
};
