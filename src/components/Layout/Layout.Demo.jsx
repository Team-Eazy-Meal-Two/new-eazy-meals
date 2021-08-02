import React from "react";
import { Layout } from "./Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px dotted blue;
  height: 500px;
`;

export const Demo = () => {
  return (
    <div>
      <Wrapper>
        <Layout title="Hello World">Hello World!</Layout>
      </Wrapper>
      <Wrapper>
        <Layout title="Hello World" primary={["primary", "#"]}>
          Hello World!
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
        >
          Hello World!
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
        inverse
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
        >
          Hello World!
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout inverse title="Hello World">
          Hello World!
        </Layout>
      </Wrapper>
      <Wrapper>
        <Layout inverse title="Hello World" primary={["primary", "#"]}>
          Hello World!
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          inverse
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
        >
          Hello World!
        </Layout>
      </Wrapper>
      <Wrapper>
        <Layout
        inverse
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
          alert={{
            title: "Hello",
            nature: "resolving",
          }}
        >
          Hello World!
        </Layout>
      </Wrapper>
      <Wrapper>
        <Layout
        
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
          alert={{
            title: "Hello",
            nature: "error",
            description: "lorem ipsum",
          }}
        >
          Hello World!
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
          alert={{
            title: "Hello",
            nature: "error",
            description: "lorem ipsum",
          }}
        >
          Hello World!
        </Layout>
      </Wrapper>
    </div>
  );
};
export default Demo;
