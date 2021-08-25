import { useState } from "react";
import { users } from "../../api/users";
import { useHistory } from "react-router-dom";
import { useMount } from "react-use";

export const useItemsList = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, SetDate] = useState("");
  const [location, setLocation] = useState("");
  const [priceInCents, setPriceInCents] = useState("");
  const[list,setList]=useState([]);
  const [alert, setAlert] = useState(null);
  

  /**
   * @type {Record<Exclude<shootKey, 'id'>,(newValue :any)=> void}
   */
  const updateFns = {
    date: SetDate,
    location: setLocation,
    name: setName,
    priceInCents: setPriceInCents,
    surname: setSurname,
  };

  /**
   * @param {shootKey} key
   */
  const update = (key) => (value) => {
    const fn = updateFns[key];
    fn(value);
  };

  /**
   *
   */

  const submit = (event) => {
    event.preventDefault();
    if (!name || name.trim() === "") setAlert("missingName");
  };
  
  const history = useHistory();
  const [current, setCurrent] = useState("");

  useMount(async () => {
    // const { id } = await users.getCurrent();

    users.getCurrent().then((response) => {
      if (!response) return history.push("/");
      setCurrent(response);
    });
  });

  const signOff = async () => {
    users.signOff();
    return history.push("/");
  };
  return {
    date,
    update,
    location,
    name,
    priceInCents,
    surname,
    current,
    signOff,
  };
  
};
