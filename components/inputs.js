import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export const Input = ({ input, meta, ...rest }) => {
  return (
    <TextField
      {...input}
      error={meta.error && meta.touched ? meta.error : ""}
      helperText={meta.error && meta.touched ? meta.error : ""}
      {...rest}
    />
  );
};

export const SelectField = ({ input, meta, ...rest }) => {
  return (
    <FormControl
      fullWidth
      disabled={rest.disabled}
      error={meta.error && meta.touched ? meta.error : ""}
    >
      <InputLabel>{rest.label}</InputLabel>
      <Select {...input} {...rest}>
        {rest.options.map((option, i) => {
          return (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>
        {meta.error && meta.touched ? meta.error : ""}
      </FormHelperText>
    </FormControl>
  );
};

export const required = (val) => (val ? undefined : "Required");
