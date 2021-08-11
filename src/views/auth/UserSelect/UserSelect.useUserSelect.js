import { useState } from "react";
import { useMount } from "react-use";
import { users } from "../../../api/users";

export const useUserSelect = () => {
  const [localUsers, setlocalUser] = useState([]);

  useMount(async () => {
    const response = await users.getUsers();
    setlocalUser(response);
  });
  return {
      localUsers
  }
};
export default useUserSelect;
