import React, { useState } from "react";
import { Select } from "./Select";
import * as SC from "./FilterSelects.styled";

export const FilterSelects = ({ filterSelects, setFilter }) => {
  const [filterValue, setFilterValue] = useState({});

  return (
    <SC.FilterSelectsList style={{ marginLeft: "auto" }}>
      {filterSelects.map((option) => (
        <Select key={option.title} selectConfig={option} />
      ))}
    </SC.FilterSelectsList>
  );
};
