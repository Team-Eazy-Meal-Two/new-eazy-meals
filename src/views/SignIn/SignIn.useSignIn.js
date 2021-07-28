import { useState } from "react";
import validator from "validator";
import { users } from "../../api/users";
import { useHistory } from "react-router-dom";

export const useSignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  

  const signIn = async () => {
    if (!email || email.length < 1) return "noEmail";
    if (!password || password.length < 1) return "noPassword";
    
    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("ShortPassword");


      setAlert('checking')
      const [success, code] = await users.signIn(email, password)

      if (!success) {
          return setAlert(code)
      }
      history.push('/items/list')
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    signIn,
    alert,

  };
};
export default useSignIn;
