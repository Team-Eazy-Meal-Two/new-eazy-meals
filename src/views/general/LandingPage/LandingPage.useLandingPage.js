import { useState } from "react";
import { useMount } from "react-use";
import { users } from "../../../api/users";

export const useLandingPage = () => {
  const [haslocalUsers, setHaslocalUser] = useState(null);

  useMount(async () => {
    const response = await users.getUsers();
    setHaslocalUser(response && response.length > 0);
  });
  return {
    haslocalUsers,
  };
};
export default useLandingPage;
