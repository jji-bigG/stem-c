import { FormControl, TextField } from "@mui/material";
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
export const required = (val) => (val ? undefined : "Required");
