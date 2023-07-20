import React, { useEffect, useState } from "react";
import { Select } from "./Select";
import * as SC from "./FilterSelects.styled";

export const FilterSelects = ({
  filterSelects,
  data,
  setFilter,
  userFilter,
  setGroupFilter,
}) => {
  const [filterValue, setFilterValue] = useState({});

  useEffect(() => {
    if (Object.keys(filterValue).length > 0) {
      if (setGroupFilter) {
        setGroupFilter(Object.values(filterValue));
      } else {
        setFilter(Object.values(filterValue));
      }
    }
  }, [filterValue, setFilter, setGroupFilter]);

  return (
    <SC.FilterSelectsList>
      {filterSelects.map((option) => (
        <Select
          key={option.title}
          selectConfig={option}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          data={data}
          userFilter={userFilter}
        />
      ))}
    </SC.FilterSelectsList>
  );
};
