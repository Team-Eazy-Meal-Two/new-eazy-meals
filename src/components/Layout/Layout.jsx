import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import { Button } from "../Button";
import { Link } from "../Link";
import { Alert } from "../Alert";
import { useHistory } from "react-router-dom";

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  green: `rgb(${tokens.colors.green})`,
  whiteStronger: `rgb(${tokens.colors.white}),${tokens.opacity.stronger}`,
  blackStrong: `rgb(${tokens.colors.black}),${tokens.opacity.strong}`,
};

const Base = styled.div`
  text-align: center;
  padding: ${tokens.spacing.xl} ${tokens.spacing.m} ${tokens.spacing.l};
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ inverse }) => inverse ? COLORS.whiteStronger : COLORS.blackStrong};
  width:100%;
  max-width:30rem;
  max-height:45rem;
  padding:${tokens.spacing.xl};

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
  align-items: center; ;
`;

const ButtonWrap = styled.div`
  padding: ${tokens.spacing.xs};
`;

const LinkWrap = styled.div`
  padding: ${tokens.spacing.m} ${tokens.spacing.xs} ${tokens.spacing.xs};
`;
const NestedChildren = styled.div`
  width: 100%;
  padding: ${tokens.spacing.l}0;
`;
const BaseWrap = styled.div`
background: ${({ inverse }) => (inverse ? COLORS.green : COLORS.white)};
  min-height:100vh;
  display: flex;
  align-items:center;
  justify-content:center;

`;
const AlertWrap = styled.div`
  padding-bottom: ${tokens.spacing.m};
`;

/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {string} title
 * @property {boolean} form
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
  const { children, title, inverse, extra, primary, secondary, alert, form } =
    props;

  const history = useHistory();

  const handleForm = (event) => {
    event.preventDefault();
    if (typeof primary[1] === "string") {
      return history.to(primary[1]());
    }
    primary[1]();
  };

  return (
    <BaseWrap inverse={inverse}>
      <Base>
        <header>
          <Text inverse={inverse} size="xl" component="h1">
            {title}
          </Text>
        </header>
        <main>
          <Content
            as={form ? "form" : "div"}
            onSubmit={form ? handleForm : undefined}
          >
            <Nested>
              <NestedChildren>{children} </NestedChildren>
            </Nested>

            {alert && (
              <AlertWrap>
                <Alert {...alert} />
              </AlertWrap>
            )}

            {secondary && (
              <ButtonWrap>
                <Button action={secondary[1]} inverse={inverse} full>
                  {secondary[0]}
                </Button>
              </ButtonWrap>
            )}

            {primary && (
              <ButtonWrap>
                <Button
                  inverse={inverse}
                  action={primary[1]}
                  full
                  importance="primary"
                >
                  {primary[0]}
                </Button>
              </ButtonWrap>
            )}

            {extra && (
              <LinkWrap>
                <Link action={extra[1]} inverse={inverse} full>
                  {extra[0]}
                </Link>
              </LinkWrap>
            )}
          </Content>
        </main>
      </Base>
    </BaseWrap>
  );
};
export default Layout;
