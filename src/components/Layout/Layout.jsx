import { Title } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import { Button } from "../Button";
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

const Base = styled.div`
  text-align: center;
  padding: ${tokens.spacing.xl} ${tokens.spacing.m} ${tokens.spacing.l};
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header``;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const Nested = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrap = styled.div`
  padding: ${tokens.spacing.xs};
`;

export const Layout = (props) => {
  const { children, title } = props;
  return (
    <Base>
      <Header>
        <Text size="xl" component="h1">
          {title}
        </Text>
      </Header>

      <Content>
        <Nested>
          <div>{children}</div>
        </Nested>

        <ButtonWrap>
          <Button full importance="primary">123</Button>
        </ButtonWrap>
        <ButtonWrap>
          <Button full>123</Button>
        </ButtonWrap>
        <ButtonWrap>
          <Button full>123</Button>
        </ButtonWrap>
      </Content>
    </Base>
  );
};
export default Layout;
