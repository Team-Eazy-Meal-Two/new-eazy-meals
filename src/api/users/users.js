import GoTrue from "gotrue-js";
// import { openDB } from "idb";
// import { v4 as createId } from "uuid";
import createDbStore, {} from '../../utils/createDbStore'
import '../../types/User'

const auth = new GoTrue({
  APIUrl: "https://team-eazy-meals-two.netlify.app/.netlify/identity",
  audience: "",
  setCookie: false,
});

const dbStore = createDbStore('users', ['activity'])

const createUsers = () => {
  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, null |'notAccount' | 'technical']>}
   */
  const signIn = async (email, password) => {
    try {
      const db = await dbRequest;
      const { id } = await auth.login(email, password);
      await dbStore.setMeta('current', id)
      await dbStore.setMeta('accessToken', token.access_token)
      // await db.put("meta", { id: "current", value: id });
      // await db.put("data", { id: id });
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
      const { id: netlifyId } = await auth.confirm(token);
      const { id } = dbStore(
        (singleUser) => singleUser.netlifyId === netlifyId
      )

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

      await db.setMeta( "current", id );
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
    const id = db.generateId()

    const newAccount = {
      id,
      name,
      image,
      activity: new Date(),
      type: "local",
    };

    await db.add("data", newAccount);
    await db.setMeta("current", id );
  };

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<[boolean, null |'emailAlreadyUsed' | 'technical']>}
   */
  const changeToOnlineAccount = async (id, email, password) => {
    try {
      const currentUser = await getCurrent();
      const { id: netlifyId } = await auth.signup(email, password);

      await db.put("meta", { id: "current", value: id });
      await db.put("data", { id, netlifyId, email, type: "online" });
      
      const newUserData = {
        ...currentUser,
        netlifyId,
        email,
        type: 'verifying'

      }

      await db.update(email, newUserData);
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
    const current = await db.getMeta("current");
    if (!current) return null;

    const response = await db.read(current);
    return response;
  };


  /**
   * @returns {Promise<User[]>}
   */
  const getUsers = async () => {
    return await db.search(true, { count: 20, sorting: 'activity' });
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
      await db.setMeta("current", null );
      return [true, null];
    } catch (error) {
      return [false, "technical"];
    }
  };

  return {
    getCurrent,
    getUsers,
    changeToOnlineAccount,
    createLocalAccount,
    signIn,
    signInWithToken,
    signOut,
    resetPassword,
    signInWithRecovery,
  };
};

export const users = createUsersApi();
export default users;
