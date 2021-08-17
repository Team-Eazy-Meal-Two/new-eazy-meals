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
      <CustomIcon image="activeCloud" />
      <CustomIcon image="noCloud" />
      <CustomIcon image="email" />
      <DarkBg>
        <CustomIcon image="activeCloud" />
        <CustomIcon image="noCloud" />
        <CustomIcon image="email" />
      </DarkBg>
    </div>
  );
};
export default Demo;
