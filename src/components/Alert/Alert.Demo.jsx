import React from "react";
import { Alert } from "./Alert";


export const Demo = () => {
  return (
    <div>
      <Alert title="Hello World" />
      <Alert title="Hello World"  nature='validation'/>
      <Alert title="Hello World"  nature='error' />
      <Alert title="Hello World"  nature='resolving'/>
      
    </div>
  );
};
export default Demo;
