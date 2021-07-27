import React from "react";
import { Layout } from "./Layout";

export const Demo = () => {
  return (
    <div>
      <Layout title="Hello World">Hello World!</Layout>
      <Layout title="Hello World" primary={["primary", "#"]}>
        Hello World!
      </Layout>
      <Layout
        title="Hello World"
        primary={["primary", "#"]}
        secondary={["secondary", "#"]}
      >
        Hello World!
      </Layout>
      <Layout
        title="Hello World"
        primary={["primary", "#"]}
        secondary={["secondary", "#"]}
        extra={["extra", "#"]}
      >
        Hello World!
      </Layout>
    </div>
  );
};
export default Demo;
