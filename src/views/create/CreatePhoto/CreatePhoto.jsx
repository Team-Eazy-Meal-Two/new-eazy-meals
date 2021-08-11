import React from "react";
import styled from 'styled-components'
import { ButtonBase } from "@material-ui/core";

import { useCreatePhoto} from "./CreatePhoto.useCreatePhoto";
import{ ALERTS} from './CreatePhoto.constants'
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { Text } from "../../../components/Text";

import {tokens} from '../../../data/tokens'

const InputWrap = styled.div`
padding: ${tokens.spacing.l} 0;

`
const Image =styled(ButtonBase)`
height:300px;
width:300px;
background:red;
`


export const CreatePhoto = () => {
    const { name, alert,setName, save } = useCreatePhoto();
  
    return (
      <Layout
        title="Photo"
        form
        primary={["Continue",save]}
        secondary={["Cancel", "#"]}
        alert={ALERTS[alert]}
      >
        <Text size="m">Please provide a photo or image to be associated with this account</Text>
        <InputWrap>
       <button></button>
        </InputWrap>
      </Layout>
    );
  };
  
  export default CreatePhoto;
  