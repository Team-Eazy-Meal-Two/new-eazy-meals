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
    return <div>1234</div>
}

export default SignIn;