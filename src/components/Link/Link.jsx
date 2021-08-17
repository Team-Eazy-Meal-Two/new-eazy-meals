import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Text from "../Text";
import styled from "styled-components";
import { tokens } from "../../data/tokens";

/**
 * @typedef {object} props
 * @property {JSX.Elements} children
 * @property {boolean}  inverse
 * @property {string | function} action
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

const Base = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  text-decoration: underline;
  border-width: 0;
  color: ${({ $inverse }) =>
    $inverse
      ? `rgba(${tokens.colors.white},  ${tokens.opacity.stronger})`
      :
       `rgba(${tokens.colors.black},${tokens.opacity.strong})`};
`;

export const Link = (props) => {
  const { action, children, inverse } = props;

  if (typeof action !== "string")
    return (
      <Base $inverse={inverse} as="button" onClick={action}>
        <Text size="s" $inverse={inverse}>
          {children}
        </Text>
      </Base>
    );

  return (
    <Base $inverse={inverse} as={RouterLink} component="a" to={action}>
      <Text size="s" $inverse={inverse}>
        {children}
      </Text>
    </Base>
  );
};
export default Link;
