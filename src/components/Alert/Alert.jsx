import React from "react";
import { Alert as Mui } from "@material-ui/lab";
import { CircularProgress } from "@material-ui/core";

const SEREVITY_MAP = {
  error: "error",
  validation: "warning",
  resolving: "info",
};

/**
 * @typedef {object} props
 * @property {'error'| 'validation'|'resolving'} nature
 * @property {string} title
 * @property { string} [description]
 
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Alert = ({ props }) => {
  const { nature = "validation", title, description } = props;
  const severity = SEREVITY_MAP[nature];
  const icon = nature ==='resolving'? <CircularProgress  size={20} thickness={6}/> :'undefined'

  return (
    <MuiAlert severity={severity} icon={icon}>
      {title}
    </MuiAlert>
  );
};
export default Alert;
