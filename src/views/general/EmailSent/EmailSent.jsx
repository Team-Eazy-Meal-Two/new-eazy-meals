import React from "react";
import styled from "styled-components";
import {EmailOutlined as Icon} from '@material-ui/icons/';
import { Layout } from "../../../components/Layout";
import { Text } from "../../../components/Text";
import { tokens } from "../../../data/tokens";

const Content = styled.div`
  padding: 1rem;
`;

const StyledIcon = styled(Icon)`
  width: ${tokens.images.l};
  height: ${tokens.images.l};
  color: rgb(${tokens.colors.white}); 
`;



export const EmailSent = () => {
  return (
    <Layout title="Email Sent" inverse secondary={["Continue", "/"]}>
      <Content>
        <StyledIcon />
        <Text size="l" inverse>
          Please check your email inbox and also your spam folder
        </Text>
      </Content>
    </Layout>
  );
};

export default EmailSent;
