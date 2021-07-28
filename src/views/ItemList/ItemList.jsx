import React, { useState, useEffect}from 'react';
import { users } from '../../api/users';
 
export const ItemList = () => {
    const [current, setCurrent] = useState('')

    useEffect(() => {
        users.getCurrent().then(setCurrent)
    })
    return <div>Logged In: {current}</div>

}

export default ItemList;