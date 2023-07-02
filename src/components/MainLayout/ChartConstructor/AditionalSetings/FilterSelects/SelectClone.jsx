import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MuiSelect } from "@mui/material";
import * as SC from "./FilterSelects.styled";

export const SelectClone = ({ selectConfig }) => {
  const [value, setValue] = React.useState("");
  const { id, title, options } = selectConfig;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <SC.FilterSelectsItem>
        <Box>
          <FormControl
            size="small"
            sx={{
              minWidth: 120,
              color: "white",
              borderColor: "white",
              "&:hover": {
                "&& fieldset": {
                  color: "inherit",
                  borderColor: "rgba(255, 255, 255, 1)",
                },
              },
              "& label.Mui-focused": {
                color: "white",
              },
              "& svg": {
                color: "inherit",
              },
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
            }}
          >
            <InputLabel
              sx={{
                color: "inherit",
                borderColor: "white",
              }}
              id={`${id}-label`}
            >
              {title}
            </InputLabel>
            <MuiSelect
              labelId={`${id}-label`}
              id={id}
              value={value}
              label={title}
              autoWidth
              sx={{
                color: "white",
                borderColor: "white",
                "&& .MuiOutlinedInput-notchedOutline": {
                  borderWidth: "2px !important",
                  borderColor: "inherit !important",
                },
              }}
              onChange={handleChange}
            >
              {options.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </MuiSelect>
          </FormControl>
        </Box>
      </SC.FilterSelectsItem>
    </>
  );
};
