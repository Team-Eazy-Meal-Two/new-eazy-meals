import { createDbStore } from "../../utils/createDbStore";
import "../../types/recipes";

const createRecipesDb = () => {
  const dbStore = createDbStore("recipes");

  /**
   * @name add
   * @param {Omit<Recipe, id> | Omit<Recipe, 'id'>[]} newValues
   * @return {Promise<Recipe | Recipe[]>}
   */

  const add = async (newValues) => await dbStore.add(newValues);

  /**
   * @name update
   * @param {Partial<Recipe> | Partial<Recipe>[]} newValues
   * @return {Promise<Recipe | Recipe[]>}
   */
  const update = async (newValues) => await dbStore.update(newValues);

  /**
   * @name remove
   * @param {string | string[]} newValues
   * @return {Promise<void>}
   */
  const remove = async (query) => await dbStore.remove(query);

  /**
   * @name read
   * @param {string | string[]} query
   * @return {Promise<Recipe | Recipe[]>}
   */
  const read = async (query) => await dbStore.read(query);

  /**
   * @typedef {object} options
   * @property {number} [count]
   * @property {string} [sorting]
   * @property {boolean} [reverse]
   */

  /**
   * @name search
   * @param {(value: object) => boolean} query
   * @param {number} [options]
   * @returns {Promise<Recipe | Recipe[]>}
   */

  const search = async (query, options) => await dbStore.search(query, options);

  return {
    add,
    update,
    remove,
    read,
    search,
  };
};

export const recipes = createRecipesDb();
export default recipes;
