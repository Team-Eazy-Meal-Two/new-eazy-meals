import {useContext} from 'react';
import {useNetworkState} from "react-use";
import {context as authContext} from "../../../hooks/useAuth";

export const useSyncCheck = () => {
    const {online} = useNetworkState();
    const {user, cancelVerification} = useContext(authContext);
    
    

    return{
        online,
        user,
        cancelVerification
    }
}

export default useSyncCheck