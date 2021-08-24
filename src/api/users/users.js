import GoTrue from "gotrue-js";
import { openDB } from "idb";
import { v4 as createId } from "uuid";
import "../../types/User";

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
  const signInWithOnlineToken = async (token) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.confirm(token);

      let cursor = await db.transaction("data").store.openCursor();
      let result = null;

      while (cursor && result === null) {
        if (cursor.value.netlifyId === id) {
          result = cursor.value;
        }
        cursor = await cursor.continue();
      }

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
   *
   * @param {string} name
   * @param {Blob} image
   */
  const createLocalAccount = async (name, image) => {
    const db = await dbRequest;
    const id = createId();

    const newAccount = {
      id,
      name,
      image,
      activity: new Date(),
      type: "local",
    };

    await db.put("data", newAccount);
    await db.put("meta", { id: "current", value: id });
  };

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, null |'emailAlreadyUsed' | 'technical']>}
   */
  const changeToOnlineAccount = async (id, email, password) => {
    try {
      const db = await dbRequest;
      const currentUser = await getCurrent();
      const { id: netlifyId, token } = await auth.signup(email, password);
      const newUserData = {
        ...currentUser,
        netlifyId,
        email,
        type: "verifying",
      };

      await db.put("meta", { id: "current", value: id });
      await db.put("meta", { id: "accessToken", value: token.access_token });

      await db.put("data", newUserData);
      await signIn(email, password);
      return [true, newUserData];
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
   * @returns {Promise<null | User>}
   */

  const getCurrent = async () => {
    const db = await dbRequest;

    const current = await db.get("meta", "current");

    if (!current || !current.value) return null;

    const response = await db.get("data", current.value);
    return response;
  };

  /**
   * @returns {Promise<User[]>}
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

  const cancelVerification = async () => {
    const db = await dbRequest;
    const user = await getCurrent();

    const response = await db.put("data", {
      ...user,
      type: "local",
    });
    return response;
  };

  return {
    getCurrent,
    getUsers,
    changeToOnlineAccount,
    createLocalAccount,
    signIn,
    signInWithOnlineToken,
    signOut,
    resetPassword,
    signInWithRecovery,
    cancelVerification,
  };
};

export const users = createUsersApi();
export default users;
