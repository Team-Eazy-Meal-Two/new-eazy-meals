import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { users } from '../../api/users';

export const useLandingPage = () => {
    const history = useHistory();
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        users.getCurrent().then(response =>{
            if (!response) return setChecking(false)
            history.push('/items/list')
             
        })

        
    }, [])

    return {
        checking
    }
}

export default useLandingPage;