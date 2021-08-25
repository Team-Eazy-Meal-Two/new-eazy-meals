import React, { useContext} from "react";
import {Input} from '../../components/Input'
import {useForm} from './ItemsList.useForm'
import { context as authContext } from "../../hooks/useAuth";
import { useItemsList } from './ItemsList.useItemsList';

export const ItemsList = () => {
  const { user, signOut } = useContext(authContext);
  useItemsList();
  const {date,location,name,priceInCents,surname,update}=useForm()
  

  return (
    <div>
      {user.image &&<img width="100" src={URL.createObjectURL(user.image)} alt="" />}
      <div>Logged In: {user ? JSON.stringify(user) : 'NO USER'}</div>

      <button onClick={signOut}>
        LOG OUT
      </button>

      <form>
        <Input label ='Name' value ={name}onChange ={update('name')}/>
        <Input label ='Surname' value ={surname} onChange={update('name')}/>
        <Input label ='Date' value = {date}onChange ={update('date')}/>
        <Input label ='location' value ={location}onChange={update('location')}/>
        <Input label ='Price'
         value ={priceInCents}onChange ={update('priceInCents')}/>
        


      </form>
    </div>
  );
};

export default ItemsList;
