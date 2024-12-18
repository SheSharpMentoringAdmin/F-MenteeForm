"use client";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export interface ElementProps {
  item: string;
}

export interface SelectProps {
  label: string;
  element?: ElementProps[];
  chosenValue?: string; // Default to an empty string if undefined
  onSelectChange?: (value: string) => void;
}

export default function SelectLabels({
  label,
  element = [],
  chosenValue = "",
  onSelectChange,
}: SelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    if (onSelectChange) {
      onSelectChange(value); // Notify parent component
    }
  };

  return (
    <FormControl sx={{ m: 1, width: "50%", paddingBottom: 2 }}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={chosenValue}
        label={label}
        onChange={handleChange}
      >
        {element.map((elementItem, index) => (
          <MenuItem key={index} value={elementItem.item}>
            {elementItem.item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
