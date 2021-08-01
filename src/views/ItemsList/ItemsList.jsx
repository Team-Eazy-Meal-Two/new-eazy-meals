import React, { useContext} from "react";
import { context as authContext } from "../../hooks/useAuth";

export const ItemsList = () => {
  const { user, signOut } = useContext(authContext);

  return (
    <div>
      <div>Logged In: {user ? JSON.stringify(user) : 'NO USER'}</div>

      <button onClick={signOut}>
        LOG OUT
      </button>
    </div>
  );
};

export default ItemsList;
