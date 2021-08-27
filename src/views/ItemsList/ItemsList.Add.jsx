import React from "react";
import styled from "styled-components";

import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { tokens } from "../../data/tokens";
import { useAdd } from "./ItemsList.useAdd"

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s};
`;
/**
 * @typedef {object} props 
 * @property {boolean} open 
 * @property {(response: Receipe) => void} onSave
 * @property {() => void} onClose
 */
/**
 * @param {Props} Props 
 * @returns {JSX.Element}
 */

export const Add = (props) => {
    const { open, onSave, onCancel } = props;

    const { title, tags,submit,ingredients,steps,timeInMinutes,description, update} = useAdd({ onSave})
  return (

    <Layout
      overlay={open ? 'open' : 'closed'}
      title=" Add Recipe"
      form
      padded
      primary={["Add ", submit]}
      secondary={["Cancel", onCancel]}
    >
      <Layout>
        <InputWrapper>
          <Input label="title" value={title} onChange={update("title")} />
        </InputWrapper>

        <InputWrapper>
          <Input label="Tags" value={tags} onChange={update("tags")} />
        </InputWrapper>

        <InputWrapper>
          <Input label="steps" value={steps} onChange={update("steps")} />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="ingredients"
            value={ingredients}
            onChange={update("ingredients")}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="timeInMinutes"
            value={timeInMinutes}
            onChange={update("timeInMinutes")}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="description"
            value={description}
            onChange={update("priceInCents")}
          />
        </InputWrapper>
      </Layout>
    </Layout>
    
    
  );
};

export default Add;
