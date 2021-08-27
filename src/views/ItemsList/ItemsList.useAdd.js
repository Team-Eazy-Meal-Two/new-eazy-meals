import { useState } from 'react';
import { recipes} from '../../api/users/recipes'
import '../../types/Recipe'

export const useAdd = (props) => {
    const { onCancel, onSave } = props;

    const [title, setTitle] = useState("");
    const [timeInMinutes, setTimeInMinutes] = useState();
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [steps, setSteps] = useState([]);
    const [ingredients, setIngredients] = useState([]);
  
    const [alert, setAlert] = useState(null);
  
    /**
     * @type {Record<Exclude<recipeKey, 'id'>,(newValue :any)=> void}
     */
    const updateFns = {
      description: setDescription,
      tags: setTags,
      title: setTitle,
      steps: setSteps,
      timeInMinutes: setTimeInMinutes,
      ingredients:setIngredients,
      
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
  
    const submit = async (event) => {
      event.preventDefault();
      if (!title || title.trim() === "")  return setAlert("missingName");
      /**
       * @typedef {object} Recipe
       */
      const response =  await recipes.add({

        tags: tags||null,
        steps: steps ||null,
        title : title|| null,
        timeInMinutes: timeInMinutes|| null,
        description : description|| null,
        ingredients : ingredients|| null,
       
      });
      onSave(response)
      updateFns();
   

     

  
    return {
      tags,
      update,
      steps,
      title,
      timeInMinutes,
      description,
      ingredients,
      submit,
      alert,
      
    };
};
};

export default useAdd;