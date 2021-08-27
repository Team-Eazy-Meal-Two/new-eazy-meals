import React from "react";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import styled from "styled-components";
import { ItemPreview } from "../../components/ItemPreview";
import { useItemsList } from "./ItemsList.useItemsList";
import { tokens } from "../../data/tokens";
import { Add } from "./ItemsList.Add";

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: ${tokens.spacing.m};
`;
const ButtonWrap = styled.div`
  padding: ${tokens.spacing.s};
`;

export const ItemsList = () => {
  const {
    list,
    phase,
    cancelAdd,
    saveAdd,
    startAdd
  
  } = useItemsList();

  return (
    <Layout title="recipes">
      <ButtonRow>
        <ButtonWrap>
          <Button action={() => console.log('filtering')}>Filtering</Button>
        </ButtonWrap>
        <ButtonWrap>
          <Button action={startAdd} importance="primary">
            Add Receipe
          </Button>
        </ButtonWrap>
      </ButtonRow>

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

        <Add onClose={cancelAdd} onSave={saveAdd} open={phase === 'adding'} />
       
    </Layout>
  );
};

export default ItemsList;
