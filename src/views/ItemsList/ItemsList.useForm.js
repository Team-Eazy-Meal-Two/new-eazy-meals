import { useState } from "react";
import "../../types/Recipe";
/**
 * @name useForm
 * @returns {Omit<Recipe,'id'> & {update :(key:recipeKey)=>any}}
 */

export const useForm = () => {
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
    ingredients:setIngredients
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
    if (!title || title.trim() === "") setAlert("missingName");
  };
  return {
    tags,
    update,
    steps,
    title,
    timeInMinutes,
    description,
    ingredients
  };
};

export default useForm;
