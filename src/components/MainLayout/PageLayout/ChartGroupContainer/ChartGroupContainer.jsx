import React, { useState } from "react";
import { FilterSelects } from "components/MainLayout/ChartConstructor/AditionalSetings/FilterSelects/FilterSelects";
import { LayoutGrid } from "../LayoutGrid/LayoutGrid";
import * as SC from "./ChartGroupContainer.styled";

export const ChartGroupContainer = ({ chartGroup }) => {
  const [groupFilter, setGroupFilter] = useState([]);
  const user = { access: "district" };

  return (
    <SC.BoxChartContainerStyled>
      <SC.BoxTitleContainerStyled>
        <SC.TitleStyled>{chartGroup.title}</SC.TitleStyled>
      </SC.BoxTitleContainerStyled>
      {chartGroup.filterSelects && (
        <SC.BoxSubTitleContainerStyled>
          <FilterSelects
            filterSelects={chartGroup.filterSelects}
            data={chartGroup.charts[0].chartConfig.data}
            setGroupFilter={setGroupFilter}
            userFilter={user.access}
          />
        </SC.BoxSubTitleContainerStyled>
      )}
      <LayoutGrid charts={chartGroup.charts} groupFilter={groupFilter} />
    </SC.BoxChartContainerStyled>
  );
};
