import { useState } from "react";
import { useHistory } from "react-router";

export const useCreatePhoto = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(null);

  const save = () => {
    if (!name || name.trim() === "") return setAlert("noName");
   history.push('/auth/photo')
  }

  return {
    name,
    setName,
    alert,
    setAlert,
    save,
  };
};
export default useCreatePhoto ;

