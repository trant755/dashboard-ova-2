import React, { useEffect, useState } from "react";
import * as SC from "./ChartBar.styled";

export const ChartBar = ({ chartConfig, filter }) => {
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
    <SC.BoxChartBarStyled>
      {Array.isArray(currentSeries) && (
        <SC.ChartBarStyled
          options={chartConfig.options}
          series={currentSeries}
          type={chartConfig.type}
          height={"100%"}
        />
      )}
    </SC.BoxChartBarStyled>
  );
};
