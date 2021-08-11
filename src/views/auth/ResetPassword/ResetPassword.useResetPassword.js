import { useState, useContext } from "react";
import validator from "validator";
import { useHistory } from "react-router";
import { context as authContext } from "../../../hooks/useAuth";

export const useResetPassword = () => {
  const { reset } = useContext(authContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);

  const send = async () => {
    if (!email || email.length < 1) return setAlert("noEmail");
    if (!validator.isEmail(email)) return setAlert("formatEmail");

    setAlert("checking");
    await reset(email);
    history.push("/auth/sent");
  };
  return {
    email,
    setEmail,
    send,
    alert,
  };
};

export default useResetPassword;
