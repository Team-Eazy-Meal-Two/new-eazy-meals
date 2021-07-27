import React from "react";
import { Input } from "./Input";

export const Demo = () => {
  return (
    <div>
      <Input accepts="text" label="Text" />
      <Input accepts="password" label="Password" />
      <Input accepts="email" label="Email" />
    </div>
  )
};
export default Demo;
