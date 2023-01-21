import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";
import { ErrorLabel, InputContainer, InputLabel } from "./input.styled";
import styles from "./input.module.scss";

function Input({ error, onBlur, onChange, value, label, ...props }) {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <OutlinedInput
        classes={{
          error: styles.error,
          root: styles.root,
          input: styles.input,
          focused: styles.focused,
          notchedOutline: styles.notchedOutline,
        }}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        {...props}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputContainer>
  );
}

export default Input;
