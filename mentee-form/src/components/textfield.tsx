import * as React from "react";
import TextField from "@mui/material/TextField";

interface FormPropsTextFieldsProps {
  label: string; // Define the prop type
  multiline: boolean;
}

export default function FormPropsTextFields({
  label,
  multiline,
}: FormPropsTextFieldsProps) {
  return (
    <div>
      <TextField required multiline={multiline} fullWidth label={label} />
    </div>
  );
}
