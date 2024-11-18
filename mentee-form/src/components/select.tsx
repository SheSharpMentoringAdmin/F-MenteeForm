"use client";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export interface ElementProps {
  item: string; // Ensure this matches the structure of your elements
}

export interface SelectProps {
  label: string;
  element?: ElementProps[];
}

export default function SelectLabels({ label, element }: SelectProps) {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "50%" }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedValue}
          label={label} // Use dynamic label
          onChange={handleChange}
        >
          {element?.map((elementItem, index) => (
            <MenuItem key={index} value={elementItem.item}>
              {elementItem.item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
