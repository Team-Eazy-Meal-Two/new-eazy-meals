import React from "react";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { useNewAccount } from "./NewAcount.useNewAccount";
import { ALERTS } from "./NewAccount.constants";

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s};
`;

const Base = styled.div`
  height: 100%;
  min-height: 100vh;
`;

export const NewAccount = () => {
  const {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setconfirmPassword,
    createAccount,
    alert,
  } = useNewAccount();

  const isResting = alert !== "creating";
  return (
    <Base>
      <Layout
        form
        title="New Acount"
        alert={alert ? ALERTS[alert] : undefined}
        secondary={["Cancel", isResting && "/"]}
        primary={["Create Account", isResting && createAccount]}
      >
        <InputWrapper>
          <Input
            value={email}
            label="Email"
            accepts="email"
            onChange={isResting && setEmail}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            value={password}
            label="Password"
            accepts="password"
            onChange={isResting && setPassword}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            value={confirmPassword}
            label=" Confirm Password"
            accepts="password"
            onChange={isResting && setconfirmPassword}
          />
        </InputWrapper>
      </Layout>
    </Base>
  );
};
export default NewAccount;
