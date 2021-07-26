import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { tokens } from "../../data/tokens";

const DarkGb = styled.div`
 width: 100%;
 background: rgb(${tokens.colors.green});
`;
export const Demo = () => {
  return (
    <div>
      <div>
        <Button importance="secondary">Hello World </Button>
      </div>

      <div>
        <Button importance="primary">Hello World </Button>
      </div>
      <DarkGb>
      <div>
        <Button importance="secondary" inverse>Hello World </Button>
      </div>

      <div>
        <Button importance="primary" inverse>Hello World </Button>
      </div>
      </DarkGb>

    </div>
  );
};
export default Demo;
