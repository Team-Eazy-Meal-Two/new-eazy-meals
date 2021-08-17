import React from "react";
import { CustomIcon } from "./CustomIcon";
import styled from "styled-components";
import { tokens } from "../../data/tokens";

const DarkBg = styled.div`
  width: 100%;
  background: rgb(${tokens.colors.green});
`;

export const Demo = () => {
  return (
    <div>
      <CustomIcon />

      <DarkBg>
        <CustomIcon />
      </DarkBg>
    </div>
  );
};
export default Demo;
