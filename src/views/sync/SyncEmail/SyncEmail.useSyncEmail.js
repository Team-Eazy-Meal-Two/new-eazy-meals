import { useState, useContext } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";
//import GoTrue from "gotrue-js";
import { context as authContext } from "../../../hooks/useAuth";

// const auth = new GoTrue({
//   APIUrl: "https://team-eazy-meals-two.netlify.app/.netlify/identity",
//   audience: "",
//   setCookie: false,
// });

export const useSyncEmail = () => {
  const { changeToOnlineAccount } = useContext(authContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const createAccount = async () => {
    if (!email || email.length < 1) return setAlert("noEmail");
    if (!password || password.length < 1) return setAlert("noPassword");
    if (!confirmPassword || confirmPassword.length < 1)
      return setAlert("noConfirmPassword ");

    if (!validator.isEmail(email)) return setAlert("formatEmail");
    if (password.length < 8) return setAlert("ShortPassword");
    if (confirmPassword.length < 8) return setAlert("shortConfirmPassword");

    if (password !== confirmPassword)
      return setAlert("misMatchConfirmPassword");
    setAlert("creating");
    // const response = await auth.signup(email, password);

    const [success, code] = await changeToOnlineAccount(email, password).catch(
      (error) => console.log(error)
    );

    if (!success) {
      return setAlert(code);
    }
    history.push("/");
  };
  return {
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setconfirmPassword,
    createAccount,
    alert,
  };
};
export default useSyncEmail;
