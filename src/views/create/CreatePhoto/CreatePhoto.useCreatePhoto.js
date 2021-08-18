import { useState } from "react";
import { useHistory ,useLocation} from "react-router"

import {users} from '../../../api/users'
/**
 * @typedef {'display'|'editing'}phase
 */

export const useCreatePhoto = () => {
  const history = useHistory();
  const{ state}= useLocation();
  console.log(state)
 
  /**
   * @type {[phase,(newPhase:phase)=> void]}
   */
  const [phase,setPhase]=useState('')
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState(null);

  const save = async () => {
    if (!image) return setAlert("noImage");
    setAlert('saving')
    await users.createLocalAccount(state.name,image)
  //  history.push('/create/sync')
  }

  const upLoadImage=([file])=>{
    const imageUrl= URL.createObjectURL(file)
    setImage(imageUrl)
    setPhase('display')
  }

const edit =()=>{
  setImage(null)
  setPhase('editing')
} 


  return {
    upLoadImage,
    image,
    alert,
    phase,
    edit,
    save,
  };
};
export default useCreatePhoto ;

