import { Box } from "@mui/material";
import ChartsGenetrators from "./ChartsGenetrators";
import * as SC from "./ChartConstructor.styled";
import { AditionalSetings } from "./AditionalSetings/AditionalSetings";

export const ChartConstructor = ({ chart }) => {
  const TypeChart = ChartsGenetrators[chart.chartConfig.type];
  const { aditionalSetings } = chart.chartConfig;

  return (
    <SC.CahrtConstructorWrapper>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: "5",
        }}
      >
        {aditionalSetings && (
          <AditionalSetings aditionalSetings={aditionalSetings} />
        )}
        <TypeChart chartConfig={chart.chartConfig} />
      </Box>
    </SC.CahrtConstructorWrapper>
  );
};
