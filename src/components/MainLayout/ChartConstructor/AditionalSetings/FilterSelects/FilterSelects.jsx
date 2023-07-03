import React, { useEffect, useState } from "react";
import { Select } from "./Select";
import * as SC from "./FilterSelects.styled";

export const FilterSelects = ({ filterSelects, data, setFilter }) => {
  const [filterValue, setFilterValue] = useState({});

  useEffect(() => {
    if (Object.keys(filterValue).length > 0) {
      setFilter(Object.values(filterValue));
    }
  }, [filterValue, setFilter]);

  return (
    <SC.FilterSelectsList style={{ marginLeft: "auto" }}>
      {filterSelects.map((option) => (
        <Select
          key={option.title}
          selectConfig={option}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          data={data}
        />
      ))}
    </SC.FilterSelectsList>
  );
};
