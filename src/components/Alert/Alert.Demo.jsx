import React from "react";
import { Alert } from "./Alert";

export const Demo = () => {
  return (
    <div>
      <Alert title="Hello World" />
      <Alert title="Hello World" nature="validation" />
      <Alert title="Hello World" nature="error" />
      <Alert title="Hello World" nature="resolving" />

      <Alert
        title="Hello World"
        description="This is a description on a specific alert"
      />
      <Alert
        title="Hello World"
        nature="validation"
        description="This is a description on a specific alert"
      />
      <Alert
        title="Hello World"
        nature="error"
        description="This is a description on a specific alert"
      />
      <Alert
        title="Hello World"
        nature="resolving"
        description="This is a description on a specific alert"
      />
    </div>
  );
};
export default Demo;
