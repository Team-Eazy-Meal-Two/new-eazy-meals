import { useState, useContext } from "react";
import validator from "validator";
import { context as authContext } from "../../../hooks/useAuth";

export const useSignIn = () => {
  const { signIn: authSignIn } = useContext(authContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  

  const signIn = async () => {
    if (!email || email.length < 1) return "noEmail";
    if (!password || password.length < 1) return "noPassword";
    
    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("ShortPassword");


      setAlert('checking')
      const [success, code] = await authSignIn(email, password)

      if (!success) {
          return setAlert(code)
      }
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
