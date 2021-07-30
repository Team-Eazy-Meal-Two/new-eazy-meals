import { Email } from "@material-ui/icons";
import { useState } from "react";
import validator from "validator";
import { users } from '../../api/users';

export const useNewAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [alert, setAlert] = useState(null);
  

  const createAccount = () => {
    if (!email || email.length < 1) return setAlert("noEmail") ;
    if (!password || password.length < 1) return setAlert("noPassword");
    if (!confirmPassword || confirmPassword.length < 1)
      return setAlert("noConfirmPassword ") ;

    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("ShortPassword");
    if (confirmPassword.length < 8) return setAlert("shortConfirmPassword");

    if (password !== confirmPassword)
      return setAlert("misMatchConfirmPassword");
      setAlert('creating')
  };
  return {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setconfirmPassword,
    createAccount,
    alert
  };
};
export default useNewAccount;
