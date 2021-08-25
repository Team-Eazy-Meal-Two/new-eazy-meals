
import { useState } from "react";
// import '../../types/Shoot'
/**
 * @name useForm
 * @returns {Omit<Shoot,'id'> & {update :(key:shootKey)=>any}}
 */

 export const useForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [date, SetDate] = useState('');
  const [location, setLocation] = useState('');
  const [priceInCents, setPriceInCents] = useState('');
  const [alert,setAlert]=useState(null)

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

}

/**
 * 
 */

const submit =(event )=>{
  event.preventDefault();
  if (!name || name.trim() === '') setAlert('missingName')
}
return {
  date,
  update,
  location,
  name,
  priceInCents,
  surname

}
}

export default useForm;
