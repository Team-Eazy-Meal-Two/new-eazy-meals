import GoTrue from 'gotrue-js';
import { openDB} from 'idb';

const auth = new GoTrue({
    APIUrl: 'https://new-eazy-meals-app.netlify.app/.netlify/identity',
    audience: '',
    setCookie: false,
});

const createUsersApi = () => {
    const dbRequest = openDB('users', 1,{
        upgrade: (innerDb) => {
            innerDb.createObjectStore('data', {keyPath: 'id'})
            innerDb.createObjectStore('meta', {keyPath: 'id'})
        }
    });

    const signIn = async (email, password) => {
        try {
        const db = await dbRequest;
        const { id } = await auth.login(email,password);

        await db.put('meta', { id: 'current', value: id });
        await db.put('data', { id: id });
     
        return [true]
    } catch(error) {
        const errorAsString = error.toString();

        if(errorAsString === 
            'JSONHTTPError: A user with this email address has already been registered'
            ){
            return [false, 'notAccount'];
        }

        return [false, "techinal"];
    }
};

    const createAccount = async (email, password) => {
        try{
            const db = await dbRequest;
            const { id } = await auth.signup(email,password);

            await db.put('meta', { id: 'current', value: id });
            await db.put('data', { id: id });

            await signIn(email, password)
            return [true]
        } catch(error) {
          const errorAsString = error.toString();
        
                    if(errorAsString === 
                        'JSONHTTPError: A user with this email address has already been registered'
                        ){
                        return [false, 'emailAlreadyUsed'];
                    }
                    return [false, 'technical'];
                }
    
        };
            
    


    const getCurrent = async () => {
        const db = await dbRequest;

        const current = await db.get('meta', 'current')

        if (!current ||! current.value) return null;

         const response = await db.get('data', current.value);
        return response;
    }

    const getUsers = async () => {

    }

    const signOff = async () => {
        const db = await dbRequest;

        await db.put('meta', { id: 'current', value: null })

        return [true];

    };

   
    return {
        getCurrent,
        getUsers,
        createAccount,
        signIn,
        signOff,
    }
};


    export const users = createUsersApi();
    export default users;

