import { useState } from 'react';
import { users } from '../../api/users';
import { useHistory } from 'react-router-dom';
import { useMount } from 'react-use';

export const useItemsList = () => {
    const history =useHistory()
    const [current, setCurrent] = useState('')

    useMount(async() =>{
        // const { id } = await users.getCurrent();
    

        users.getCurrent().then((response) => {
            if (!response) return history.push('/')
            setCurrent(response)
        })
    })

    const signOff = async () => {
        users.signOff();
        return history.push('/')
    }
    return { 
        current,
        signOff,
    }
}