import { openDB } from "idb";
import { v4 as createId } from "uuid";

export const createDbStore = (name, keys = []) => {
  const dbRequest = openDB(name, 1, {
    upgrade: (innerDb) => {
      innerDb.createObjectStore("data", { keyPath: "id" });
    const data = innerDb.createObjectStore("meta", { keyPath: "id" });

     keys.forEach(singleKey => 
      data.createIndex(`${singleKey}-index`, singleKey)
     )
    },
  });

  /**
   * @name generateId
   * @returns {string}
   */

  const generateId = () => createId();

  /**
   * @name setMeta
   * @param {string} key 
   * @param {any} value 
   */

  const setMeta = async (key, value) => {
    const db = await dbRequest;
    await db.put('meta', { id: key, value })

  }

  /**
   * @name getMeta
   * @param {string} key 
   * @returns {any} value
   */

  const getMeta = async (key) => {
    const db = await dbRequest;
    const { value } = await db.get('meta', key)
    return value

  }

/**
   * @name add
   * @param {object | object[]}
   * @returns {Promise<void>}
   */
  const add = async (values) => {
    const db = await dbRequest;

    const valuesAsArray = Array.isArray(values) ? values : [values];

    const promiseArray = valuesAsArray.map(
      (singleValues) =>
        new Promise((resolve) => {
          const newItem = {
            id: generateId(),
            ...singleValues,
          }

          db.add("data", newItem).then(() => resolve(newItem));
        })
    );
    
    const results = await Promise.all(promiseArray);

    if (results.length < 1) return null;
    if (results.length < 2) return results[0];
    return results;

  };

   /**
   * @name update
   * @param {object | object[]}
   * @returns {Promise<void>}
   */

  const update = async (values) => {
    const db = await dbRequest;
  
    const valuesAsArray = Array.isArray(values) ? values : [values];

    const promiseArray = valuesAsArray.map(
      (singleValues) =>
        new Promise((resolve) => {
          read(singleValues.id).then(existingValue => {
            db.put("data", {
              ...existingValue,
              ...singleValues,
            }).then(resolve);
          })  
        })
    );

    return await Promise.all(promiseArray);
  };

  /**
   * @name remove
   * @param {string | string[]}
   * @returns {Promise<void>}
   */

  const remove = async (query) => {
    const db = await dbRequest;

    const queryAsArray = Array.isArray(query) ? query : [query];

    const promiseArray = queryAsArray.map(
      (key) =>
        new Promise((resolve) => {
          db.delete("data", key).then(resolve);
        })
    );

    await Promise.all(promiseArray);
  };

  /**
   * @typedef {object} options
   * @property {number} [count]
   * @property {string} [sorting] 
   * @property {boolean} [reverse]
   */

  /** @type {defaultOptions} */
  const defaultOptions = {
    count: 0,
    sorting: 'id',
    reverse: false,
  }

  /**
   * @name search
   * @param {(value: object) => boolean} query
   * @param {number} [options]
   * @returns {Promise<object[]>}
   */

  const search = async (query, options) => {
    const internalOptions = !options ? defaultOptions : {
      count: options.count || defaultOptions.count,
      sorting: options.sorting || defaultOptions.sorting,
      reverse: options.reverse === undefined ? defaultOptions.reverse : options.reverse,
    }
     
    const { count, sorting, reverse } = internalOptions;

    const db = await dbRequest;
    const index = db.transaction('data')
    .store
    .index(`${sorting}-index`, reverse ? 'prev' : 'next');
    let cursor = await index.openCursor();

    let countTrack = 0;
    let result = [];

    while (cursor && (!count === 0 || countTrack < count)) {
      if (query === true || query(cursor.value)) {
        result.push(cursor.value);
        countTrack += 1;
      }

      cursor = await cursor.continue();
    }

    return result;
  };

  /**
   * @name read
   * @param {string | string[]}
   * @returns {Promise<object | object[]>}
   */
  const read = async (query) => {
    const db = await dbRequest;

    const queryAsArray = Array.isArray(query) ? query : [query];

    const promiseArray = queryAsArray.map(
      (key) =>
        new Promise((resolve) => {
          db.get("data", key).then(resolve);
        })
    );

    const results = Promise.all(promiseArray);

    if (results.length < 1) return null;
    if (results.length < 2) return results[0];
    return results;
  };
  return {
    read,
    search,
    generateId,
    add,
    update,
    remove,
    setMeta,
    getMeta,
    createDbStore
  }
};

export default createDbStore;
