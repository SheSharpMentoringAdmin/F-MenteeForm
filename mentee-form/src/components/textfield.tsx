"use client";

import React from "react";
import TextField from "@mui/material/TextField";

interface FormPropsTextFieldsProps {
  label: string;
  multiline: boolean;
  value: string;
  onChange: (value: string) => void;
}

export default function FormPropsTextFields({
  label,
  multiline,
  value,
  onChange,
}: FormPropsTextFieldsProps) {
  return (
    <div>
      <TextField
        required
        multiline={multiline}
        fullWidth
        label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
