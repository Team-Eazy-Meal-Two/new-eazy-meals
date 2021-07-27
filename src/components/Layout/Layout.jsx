import { Title } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import {Text} from "../Text"
/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {string} title
 * @property {boolean} inverse
 * @property {[string, string | function]} [primary]
 *  @property {[string, string | function]} [secondary]
 *  @property {[string, string | function]} [extra]
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

const Base = styled.div``
const Header = styled.header``
export const Layout = (props) => {
    const {children, title} = props;
  return (
    <Base>
      <Header>
        <Text size="xl" component="h1">{title}</Text>
        {children}
      </Header>
    </Base>
  );
};
export default Layout;
