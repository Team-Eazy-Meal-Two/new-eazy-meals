import { Title } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import { Button } from "../Button";
import { Link } from "../Link";

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  green: `rgb(${tokens.colors.green})`,
    whiteStronger: `rgb(${tokens.colors.white}),${tokens.opacity.stronger}`,
  blackStrong: `rgb(${tokens.colors.black}),${tokens.opacity.strong}`
};

const Base = styled.div`
  text-align: center;
  padding: ${tokens.spacing.xl} ${tokens.spacing.m} ${tokens.spacing.l};
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ inverse }) => (inverse ? COLORS.green : COLORS.white)}}
background: ${({ inverse }) => (inverse ? COLORS.whiteStronger : COLORS.blackStrong)}}

  `;

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

const LinkWrap = styled.div`
  padding: ${tokens.spacing.m} ${tokens.spacing.xs} ${tokens.spacing.xs};
`;
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

export const Layout = (props) => {
  const { children, title, inverse, extra, primary, secondary } = props;
  return (
    <Base inverse={inverse}>
      <header>
        <Text inverse={inverse} size="xl" component="h1">
          {title}
        </Text>
      </header>

      <Content>
        <Nested>
          <div>{children}</div>
        </Nested>

        {secondary && (
          <ButtonWrap>
            <Button inverse={inverse} full>
              123
            </Button>
          </ButtonWrap>
        )}

        {primary && (
          <ButtonWrap>
            <Button full>123</Button>
          </ButtonWrap>
        )}

        {extra && (
          <LinkWrap>
            <Link inverse={inverse} full>
              123
            </Link>
          </LinkWrap>
        )}
      </Content>
    </Base>
  );
};
export default Layout;
