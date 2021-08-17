import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Typography } from "@material-ui/core";

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  black: `rgb(${tokens.colors.black})`,
  blackMedium: `rgba(${tokens.colors.black}, ${tokens.opacity.medium})`,
  blackStronger: `rgba(${tokens.colors.black}, ${tokens.opacity.stronger})`,
  blackStrong: `rgba(${tokens.colors.black}, ${tokens.opacity.strong})`,
  whiteStrong: `rgba(${tokens.colors.white}, ${tokens.opacity.strong})`,
  whiteStronger: `rgba(${tokens.colors.white}, ${tokens.opacity.stronger})`,
};

const calcColor = ({ size, $inverse }) => {
  if ((size === "xl" || size === "l ") && $inverse) return COLORS.white;
  if (size === "xl" || size === "l") return COLORS.blackStronger;
  if (size === "m" && $inverse) return COLORS.whiteStronger;
  if (size === "m") return COLORS.blackStrong
  if ($inverse) return COLORS.whiteStrong
  return COLORS.blackMedium;
};

const lineClampCss = (number) => `
display: -webkit-box;
-webkit-line-clamp: ${number};
-webkit-box-orient: vertical;
overflow: hidden;
`

const StyledTypography = styled(Typography)`
  font-size: ${({ size }) => tokens.text[size].size};
  font-weight: ${({ size }) => tokens.text[size].weight};
  line-height: ${({ size }) => tokens.text[size].height};
  letter-spacing: ${({ size }) => tokens.text[size].spacing};
  ${({ lines }) => lines > 1 ? lineClampCss(lines) : ''}
  color: ${calcColor};
`;
/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {'s' | 'm' | 'l' | 'xl'} size
 * @property {boolean} inverse
 * @property {number} [lines]
 * @property {'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'| 'h6'}  component
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */
export const Text = (props) => {
  const {inverse, ...remainingProps} = props;
  return <StyledTypography {...remainingProps} $inverse={inverse}/>;
};
export default Text;
