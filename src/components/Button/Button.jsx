import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@material-ui/core";
import { tokens } from "../../data/tokens"


const COLORS = {
    white: `rgb(${tokens.colors.white})`,
    green: `rgb(${tokens.colors.green})`,
    black: `rgb(${tokens.colors.black})`,
    none : `transparent`,
    greenSubtler: `rgba(${tokens.colors.green}), ${tokens.opacity.subtler}`,
    greenStronger: `rgba(${tokens.colors.green}), ${tokens.opacity.stronger}`,
    whiteSubtler: `rgba(${tokens.colors.white}), ${tokens.opacity.subtler}`,
    whiteStronger: `rgba(${tokens.colors.white}), ${tokens.opacity.subtler}`,
}

const calcBackground = ({ importance, inverse }) => {
    if ( importance === 'primary' && inverse) return COLORS.white;
    if (inverse || importance === 'secondary') return COLORS.none
    return COLORS.green
}
const calcColor = ({ importance, inverse}) => { 
    if ( importance === 'primary' && inverse) return COLORS.green;
    if (inverse || importance === 'secondary') return COLORS.white
    return COLORS.green
}
const calcBorder = ({ importance, inverse }) => {
    if ( importance === 'primary') return `1px solid ${COLORS.none}`;
    if (inverse) return `1px solid ${COLORS.white}` ;
    return `1px solid ${COLORS.green}`;
}
const calcHover = ({ importance, inverse }) => {
    if ( importance === 'primary' && inverse) return COLORS.whiteStronger;
    if (inverse) return COLORS.whiteSubtler;
    if (importance === 'primary') return COLORS.greenStronger
    return COLORS.greenSubtler;
}

const calcActionProps = (action) => {
  if (typeof action !== 'string') return { component: 'button', onclick: action }

}

const StyleButton = styled(MuiButton)`
  color: ${calcColor};

  background: ${calcBackground};

  border: ${calcBorder};

  &:hover{
    background: ${calcHover};
  }
`;
/** 
 * @typedef {object} props 
 * @property {JSX.Elements} children
 * @property {'primary' | 'secondary'} importance
 * @property {boolean}  inverse
 */

/**
 * @param {props} props 
 * @returns {JSX.Element}
 */

export const Button = (props) => {
    const {importance , action } = props;
    const variant = importance === 'primary' ? 'contained' : 'outlined'
    
    return <StyleButton {...props} variant={variant} />
    
}
export default Button;