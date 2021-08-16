import { useState } from "react";
import { useMount } from "react-use";
import { users } from "../../../api/users";
import '../../../types/User'

export const useUserSelect = () => {
  /**
   * @type {[User[], (newUser: User[]) => void ]}
   */
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
