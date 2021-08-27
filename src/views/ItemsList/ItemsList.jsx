import React from "react";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";
import styled from "styled-components";
import { ItemPreview } from "../../components/ItemPreview";
import { useItemsList } from "./ItemsList.useItemsList";
import { tokens } from "../../data/tokens";

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s};
`;

export const ItemsList = () => {
  const {
    tags,
    update,
    steps,
    title,
    timeInMinutes,
    description,
    ingredients,
    list,
    submit,
  } = useItemsList();

  return (
    <Layout title="recipes">
      {list.map(
        ({
          id,
          tags,
          steps,
          title,
          timeInMinutes,
          description,
          ingredients,
        }) => (
          <ItemPreview key={id} title={`${title}${description}`} action="#" />
        )
      )}

      <Layout
        overlay
        title=" Add Recipe"
        form
        padded
        primary={["Add ", "#"]}
        secondary={["Cancel", "#"]}
      >
        <div>
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
        </div>
      </Layout>
    </Layout>
  );
};

export default ItemsList;
