import { useState } from 'react';
import { recipes} from '../../api/users/recipes'
import { useMount } from 'react-use';
import '../../types/Recipe'

/**
 * @typedef { 'resting' | 'adding' | 'filtering'} phase 
 */
export const useItemsList = () => {
  /**
   * @type {[phase, (newPhase: phase) = void]}
   */
    const [ phase, setPhase ] = useState('closed')
   
  
  
    /**
     * @type {Record<Exclude<recipeKey, 'id'>,(newValue :any)=> void}
     */
     const [list,setList]=useState([]);

     const startAdd = () => setPhase('adding')
     const saveAdd = (newValue) => {
       setList([newValue,...list])
       setPhase('resting')
     }
     const cancelAdd = () => setPhase('resting')

  
    

     
      useMount(async() =>{
        const result = await recipes.search(true, { 
       sorting:'timeInMinutes',

      })
       setList(result)
      
       })

  
    return {
    phase,
      list,
      alert,
      startAdd,
      cancelAdd,
      saveAdd
      
    };
}
