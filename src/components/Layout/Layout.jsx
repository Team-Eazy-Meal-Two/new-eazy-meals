import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import { Button } from "../Button";
import { Link } from "../Link";
import { Alert } from "../Alert";
import { useHistory } from "react-router-dom";
import "../../types/action";

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  green: `rgb(${tokens.colors.green})`,
  whiteStronger: `rgb(${tokens.colors.white}),${tokens.opacity.stronger}`,
  blackStrong: `rgb(${tokens.colors.black}),${tokens.opacity.strong}`,
};

const Base = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ $inverse }) =>
    $inverse ? COLORS.whiteStronger : COLORS.blackStrong};
  width: 100%;
  max-width: 25rem;
  max-height: 45rem;
  padding-bottom: ${tokens.spacing.xl};
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const Nested = styled.div`
  padding: ${({ padded }) => (padded ? `0 ${tokens.spacing.m}` : 0)};
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
  padding: ${tokens.spacing.m} 0;
`;
const BaseWrap = styled.div`
  background: ${({ $inverse }) => ($inverse ? COLORS.green : COLORS.white)};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AlertWrap = styled.div`
  padding-bottom: ${tokens.spacing.m};
`;
const Header = styled.header`
  padding: ${tokens.spacing.xl} ${tokens.spacing.m} 0;
`;
const Actions = styled.aside`
  padding: 0 ${tokens.spacing.m} ${tokens.spacing.l};
`;

/**
 *
 * @typedef {object} props
 * @property {JSX.Element} children - the main content on the page
 * @property {string} title - a page title to be used as the <h1> at the top
 *  @property {boolean} padded - adds padding  to the sides of the primary content (passed as children)
 * @property {boolean} form
 * @property {boolean} inverse - gives the page a dark background and makes text white
 * @property {action} [primary] - a primary action that is highlighted to a user
 *  @property {action} [secondary] - a secondary supporting action that can be performed
 *  @property {action} [extra] - an optional(visuall weaker) action that can be peformed
 * @property {{title: string, description?: string, nature: 'error' | 'validation' | 'resolving' }}
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Layout = (props) => {
  const {
    children,
    title,
    inverse,
    extra,
    primary,
    secondary,
    alert,
    form,
    padded = false,
  } = props;

  const history = useHistory();

  const handleForm = (event) => {
    event.preventDefault();
    if (typeof primary[1] === "string") {
      return history.push(primary[1], primary[2] || {});
    }
    primary[1]();
  };

  return (
    <BaseWrap $inverse={inverse}>
      <Base>
        <Header>
          <Text $inverse={inverse} size="xl" component="h1">
            {title}
          </Text>
        </Header>
        <Content
          as={form ? "form" : "div"}
          onSubmit={form ? handleForm : undefined}
        >
          <main>
            <Nested padded={padded}>
              <NestedChildren>{children} </NestedChildren>
            </Nested>
          </main>
          <Actions aria-label="actions">
            {alert && (
              <AlertWrap>
                <Alert {...alert} />
              </AlertWrap>
            )}

            {secondary && (
              <ButtonWrap>
                <Button
                  action={(form && !primary) || secondary[1]}
                  detail={secondary[1] || {}}
                  $inverse={inverse}
                  full
                >
                  {secondary[0]}
                </Button>
              </ButtonWrap>
            )}

            {primary && (
              <ButtonWrap>
                <Button
                  $inverse={inverse}
                  action={primary[1]}
                  full
                  detail={primary[2] || {}}
                  importance="primary"
                >
                  {primary[0]}
                </Button>
              </ButtonWrap>
            )}

            {extra && (
              <LinkWrap>
                <Link
                  action={extra[1]}
                  detail={extra[2] || {}}
                  $inverse={inverse}
                  full
                >
                  {extra[0]}
                </Link>
              </LinkWrap>
            )}
          </Actions>
        </Content>
      </Base>
    </BaseWrap>
  );
};
export default Layout;
