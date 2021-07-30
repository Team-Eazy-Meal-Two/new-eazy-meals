import React from "react";
import { users } from "../../api/users";
import { useItemsList } from "./ItemsList.useItemsList";
import {useHistory} from "react-router-dom"

export const ItemsList = () => {
  const history = useHistory();
  const { current } = useItemsList();

  return (
    <div>
      <div>Logged In: {JSON.stringify(current)}</div>

      <button onClick={users.signOff().then(() => history.push("/"))}>
        LOG OUT
      </button>
    </div>
  );
};

export default ItemsList;
