import { useState, useContext } from "react";
import { context as authContext } from "../../../hooks/useAuth";
import { useMount } from "react-use";
import { users } from "../../../api/users";
import '../../../types/User'

export const useUserSelect = () => {
  /**
   * @type {[User[], (newUser: User[]) => void ]}
   */
  const [localUsers, setlocalUser] = useState([]);
  const { signInLocal} = useContext(authContext);

  useMount(async () => {
    const response = await users.getUsers();
    setlocalUser(response);

  });

  const logUserIn = async(id)=>{
    await signInLocal(id);
  }
  return {
      localUsers,
      logUserIn,
  }
};
export default useUserSelect;
