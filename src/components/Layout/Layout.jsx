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
min-height :100vh

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
 ;
`;

const ButtonWrap = styled.div`
  padding: ${tokens.spacing.xs};
`;

const LinkWrap = styled.div`
  padding: ${tokens.spacing.m} ${tokens.spacing.xs} ${tokens.spacing.xs};
`;
const NestedChildren = styled.div`
width:100%
`



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
        < NestedChildren >{children} </NestedChildren >
        </Nested>

        {secondary && (
          <ButtonWrap>
            <Button  action ={secondary[1]}inverse={inverse} full>
            {secondary[0]}
            </Button>
          </ButtonWrap>
        )}

        {primary && (
          <ButtonWrap>
            <Button action ={primary[1]} inverse={inverse} full importance ='primary'>{primary[0]} </Button>
          </ButtonWrap>
        )}

        {extra && (
          <LinkWrap>
            <Link action ={extra[1]}inverse={inverse} full>
            {extra[0]}
            </Link>
          </LinkWrap>
        )}
      </Content>
    </Base>
  );
};
export default Layout;
