import React, { useState, useEffect } from "react";
import { users } from "../../api/users";
import { useitemsList } from "./ItemsList.useItemsList";

export const ItemsList = () => {
  const { current } = useitemsList();

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
