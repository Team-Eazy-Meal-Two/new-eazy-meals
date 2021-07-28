import React from "react";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { useNewAccount } from "./NewAcount.useNewAccount";
import { Alert } from "../../components/Alert";

export const NewAccount = () => {
  const InputWrapper = styled.div`
    padding: ${tokens.spacing.s};
  `;
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
  if (true) {
    return (
      <Layout
        title="New Acount"
        secondary={["Cancel", "/",false]}
        primary={["Create Account", false]}
      >
        <Alert title="checking details" nature="resolving" />
      </Layout>
    );
  }
  return (
    <Layout
      title="New Acount"
      secondary={["Cancel", "/"]}
      primary={["Create Account", createAccount]}
    >
      <InputWrapper>
        <Input
          value={email}
          label="Email"
          accepts="email"
          onChange={setEmail}
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          value={password}
          label="Password"
          accepts="password"
          onChange={setPassword}
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          value={confirmPassword}
          label=" Confirm Password"
          accepts="password"
          onChange={setconfirmPassword}
        />
      </InputWrapper>
    </Layout>
  );
};
export default NewAccount;
