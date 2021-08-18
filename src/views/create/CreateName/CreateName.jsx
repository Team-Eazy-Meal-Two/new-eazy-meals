import React from "react";
import styled from 'styled-components'
import { useCreateName } from "./Createname.UseCreateName";
import{ ALERTS} from './CreateName.constants'
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { Text } from "../../../components/Text";

import {tokens} from '../../../data/tokens'

const InputWrap = styled.div`
padding: ${tokens.spacing.l} 0;

`

export const CreateName = () => {
  const { name, alert,setName, save } = useCreateName();

  return (
    <Layout
      title="New Account"
      padded
      form
      primary={["Continue",save,{ name }]}
      secondary={["Back", "/"]}
      alert={ALERTS[alert]}
    >
      <Text size="m">Provide a name to be associated with this account</Text>
      <InputWrap>
      <Input accepts='text' label='Your Name 'value={name} onChange={setName}/>
      </InputWrap>
    </Layout>
  );
};

export default CreateName;
