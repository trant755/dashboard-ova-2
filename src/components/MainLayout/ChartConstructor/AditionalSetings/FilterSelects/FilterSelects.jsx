import * as React from "react";
import { Select } from "./Select";
import * as SC from "./FilterSelects.styled";

export const FilterSelects = ({ filterSelects }) => {
  return (
    <SC.FilterSelectsList style={{ marginLeft: "auto" }}>
      {filterSelects.map((option) => (
        <Select key={option.title} selectConfig={option} />
      ))}
    </SC.FilterSelectsList>
  );
};
