import { useState } from "react";
import { useHistory ,useLocation} from "react-router"

import {users} from '../../../api/users'
/**
 * @typedef {'display'|'editing'}phase
 */

export const useCreatePhoto = () => {
  const history = useHistory();
  const{ state }= useLocation();

  if (!state || !state.name) history.push('/create/name')
  
 
  /**
   * @type {[phase,(newPhase:phase)=> void]}
   */
  const [phase,setPhase]=useState('empty')
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState(null);

  const save = async () => {
    if (!image) return setAlert("noImage");
    setAlert('saving')

    await users.createLocalAccount(state.name,image)

   history.push("/sync/check");
  }

  const upLoadImage=([file])=>{
    setImage(file)
    setPhase('display')
  }

const edit =()=>{
  setImage(null)
  setPhase('editing')
} 


  return {
    upLoadImage,
    image: image && URL.createObjectURL(image),
    alert,
    phase,
    edit,
    save,
  };
};
export default useCreatePhoto ;

