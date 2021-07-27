import React from "react";
import styled from "styled-components";
import { Text } from "./Text";
 import { tokens } from "../../data/tokens";

const DarkGb = styled.div`
 width: 100%;
 background: rgb(${tokens.colors.green});
`;

export const Demo = () => {
    return <div>
        <Text size="s">This is a title</Text>
        <Text size="m">This is a title</Text>
        <Text size="l">This is a title</Text>
        <Text size="xl">This is a title</Text>

        <Text size="s">Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Minus sit dolores laboriosam 
            laborum impedit! Repudiandae assumenda exercitationem 
            quas officia eum hic deserunt, id dolorum quibusdam 
            quisquam, dicta explicabo architecto.</Text>

        <Text size="m">Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Minus sit dolores laboriosam 
            laborum impedit! Repudiandae assumenda exercitationem 
            quas officia eum hic deserunt, id dolorum quibusdam 
            quisquam, dicta explicabo architecto.</Text>

        <Text size="l">Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Minus sit dolores laboriosam 
            laborum impedit! Repudiandae assumenda exercitationem 
            quas officia eum hic deserunt, id dolorum quibusdam 
            quisquam, dicta explicabo architecto.</Text>
        <DarkGb>

        <Text inverse size="s">This is a title</Text>
        <Text inverse size="m">This is a title</Text>
        <Text inverse size="l">This is a title</Text>
        <Text inverse size="xl">This is a title</Text>

        <Text inverse size="s">Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Minus sit dolores laboriosam 
            laborum impedit! Repudiandae assumenda exercitationem 
            quas officia eum hic deserunt, id dolorum quibusdam 
            quisquam, dicta explicabo architecto.</Text>

        <Text inverse size="m">Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Minus sit dolores laboriosam 
            laborum impedit! Repudiandae assumenda exercitationem 
            quas officia eum hic deserunt, id dolorum quibusdam 
            quisquam, dicta explicabo architecto.</Text>

        <Text inverse size="l">Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Minus sit dolores laboriosam 
            laborum impedit! Repudiandae assumenda exercitationem 
            quas officia eum hic deserunt, id dolorum quibusdam 
            quisquam, dicta explicabo architecto.</Text>

            </DarkGb>
    </div>
}
export default Demo;