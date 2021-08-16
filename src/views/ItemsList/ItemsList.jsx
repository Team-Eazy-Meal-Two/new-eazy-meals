import React, { useContext} from "react";
import { context as authContext } from "../../hooks/useAuth";
import { useItemsList } from './ItemsList.useItemsList';

export const ItemsList = () => {
  const { user, signOut } = useContext(authContext);
  useItemsList();
  

  return (
    <div>
      {user.image &&<img width="100" src={URL.createObjectURL(user.image)} alt="" />}
      <div>Logged In: {user ? JSON.stringify(user) : 'NO USER'}</div>

      <button onClick={signOut}>
        LOG OUT
      </button>
    </div>
  );
};

export default ItemsList;
