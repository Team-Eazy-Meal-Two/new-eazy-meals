import React from "react";
import { Layout } from "./Layout";

export const Demo = () => {
  return (
    <div>
      <Layout title="Hello World">Hello World</Layout>

      <Layout title="Hello World" primary={["primary", "a"]}>
        Hello World
      </Layout>

      <Layout
        title="Hello World"
        primary={["primary", "a"]}
        secondary={["secondary", "a"]}
      >
        Hello World
      </Layout>

      <Layout
        title="Hello World"
        primary={["primary", "a"]}
        secondary={["secondary", "a"]}
        extra={["extra", "a"]}
      >
        Hello World
      </Layout>
    </div>
  );
};
export default Demo;
