import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Inputs";
import { tokens } from "../../data/tokens";
import { useNewAccount } from "./NewAccount.useNewAccount";
import { ALERTS } from "./NewAccount.contants"

const InputWrapper = styled.div`
 padding: ${tokens.spacing.s} 0;
`;

const Base = styled.div`
 height: 100%;
 min-height: 100vh;
`;



export const SignIn = ()=> {
    const {
        email,
        password,
        confirmPassword,
        setEmail,
        setPassword,
        setConfirmPassword,
        createAccount,
        allert,
    } = useNewAccount();

    const isResting = alert !== "creating";

    return (
        <Base>
        <Layout
        form
        title="New Account"
        alert={alert ? ALERTS[alert] : undefined}
        secondary={["Cancel", isResting && "/"]}
        primary={["Create Account", isResting &&
        createAccount]}
        >
            <InputWrapper>
            <Input
            value={email}
            label="Email"
            accepts="email"
            onchange={isResting && setEmail}
            />
            </InputWrapper>

        </Layout>
        </Base>
    )
}

export default SignIn;