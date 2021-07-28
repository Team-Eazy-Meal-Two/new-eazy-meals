import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { tokens } from "../../data/tokens";

const StyledTextField = styled(TextField)`
  & .MuiFormLabel-root-Mui-focused {
    color: rgb(${tokens.colors.green});
  }
  & .MuiInputBase-root::after {
    border-bottom-color: rgb(${tokens.colors.green});
  }
`;

/**
 * @typedef {object} props
 * @property {string} label
 * @property {'text' | 'password' | 'email'} accepts
 * @property {(value: string) => void} onChange
 */

/**
 * @param {props} props 
 * @returns {JSX.Element}
 */
export const Input = (props) => {
  const { accepts, onChange } = props;

  const handleChange = (event) => onChange(event.target.value);
  return (
    <StyledTextField
      {...props}
      onChange={handleChange}
      fullWidth
      type={accepts}
      variant="filled"
    />
  );
};
export default Input;
