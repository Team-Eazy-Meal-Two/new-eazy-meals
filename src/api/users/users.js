import GoTrue from "gotrue-js";
import { openDB } from "idb";

const auth = new GoTrue({
  APIUrl: "https://team-eazy-meals-two.netlify.app/.netlify/identity",
  audience: "",
  setCookie: false,
});

const createUsersApi = () => {
  const dbRequest = openDB("users", 1, {
    upgrade: (innerDb) => {
      innerDb.createObjectStore("data", { keyPath: "id" });
      innerDb.createObjectStore("meta", { keyPath: "id" });
    },
  });
  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, null |'notAccount' | 'technical']>}
   */
  const signIn = async (email, password) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.login(email, password);

      await db.put("meta", { id: "current", value: id });
      await db.put("data", { id: id });

      return [true, null];
    } catch (error) {
      const errorAsString = error.toString();

      if (
        errorAsString ===
        "JSONHTTPError: A user with this email address has already been registered"
      ) {
        return [false, "notAccount"];
      }
      if (
        errorAsString ===
        "JSONHTTPError: A user with this email address has already been registered"
      ) {
        return [false, "notVerified"];
      }

      return [false, "techinal"];
    }
  };
  /**
   * @param {string} token
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signInWithToken = async (token) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.confirm(token);

      await db.put("meta", { id: "current", value: id });
      await db.put("data", { id: id });

      return [true, null];
    } catch (error) {
      return [false, "techinal"];
    }
  };
    /**
   * @param {string} token
   * @returns {Promise<[boolean, null | 'technical']>}
   */
     const signInWithRecovery = async (token) => {
      try {
        const db = await dbRequest;
        const { id } = await auth.recoveryToken(token);
  
        await db.put("meta", { id: "current", value: id });
        await db.put("data", { id: id });
  
        return [true, null];
      } catch (error) {
        return [false, "techinal"];
      }
    };
  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, null |'emailAlreadyUsed' | 'technical']>}
   */
  const createAccount = async (email, password) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.signup(email, password);

      await db.put("meta", { id: "current", value: id });
      await db.put("data", { id: id });

      await signIn(email, password);
      return [true, null];
    } catch (error) {
      const errorAsString = error.toString();

      if (
        errorAsString ===
        "JSONHTTPError: A user with this email address has already been registered"
      ) {
        return [false, "emailAlreadyUsed"];
      }
      return [false, "technical"];
    }
  };

  /**
   * @returns {Promise<null | { id: string}>}
   */

  const getCurrent = async () => {
    const db = await dbRequest;

    const current = await db.get("meta", "current");

    if (!current || !current.value) return null;

    const response = await db.get("data", current.value);
    return response;
  };
  /**
   * @returns {Promise<{ id: string}[]>}
   */
  const getUsers = async () => {
    const db = await dbRequest;
    return await db.getAll("data");
  };
  /**
   *
   * @param {string} email
   * @returns {[boolean]}
   */
  const resetPassword = async (email) => {
    await auth.requestPasswordRecovery(email);
    return [true];
  };

  /**
   * @returns {Promise<[boolean, null | 'technical']>}
   */
  const signOut = async () => {
    try {
      const db = await dbRequest;
      await db.put("meta", { id: "current", value: null });
      return [true, null];
    } catch (error) {
      return [false, "technical"];
    }
  };

  return {
    getCurrent,
    getUsers,
    createAccount,
    signIn,
    signInWithToken,
    signOut,
    resetPassword,
    signInWithRecovery,
  };
};

export const users = createUsersApi();
export default users;
