import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

export const SingleInfo = ({ chartConfig, filter }) => {
  const [currentSeries, setCurrentSeries] = useState([]);

  useEffect(() => {
    if (chartConfig?.series) {
      setCurrentSeries(chartConfig.series);
    }
    if (chartConfig?.data) {
      let newSeries = chartConfig.data;

      for (const elem of filter) {
        if (newSeries) {
          if (elem === "") {
            newSeries = newSeries[Object.keys(newSeries)[0]];
          } else {
            newSeries = newSeries[elem];
          }
        }
      }

      setCurrentSeries(newSeries);
    }
  }, [chartConfig, filter]);

  if (!chartConfig.options) {
    return <div>no data</div>;
  }
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography sx={{ fontSize: "24px", textAlign: "center" }}>
        {chartConfig.options.text}
      </Typography>
      {typeof currentSeries === "string" ||
        (typeof currentSeries === "number" && (
          <Typography sx={{ fontSize: "26px", textAlign: "center" }}>
            {currentSeries}
            {chartConfig.options.addText && ` ${chartConfig.options.addText}`}
          </Typography>
        ))}
    </Box>
  );
};
