
import { useState } from 'react';
import { users } from '../../api/users';
import { useHistory } from 'react-router-dom';


export const useItemsList = () => {
const history =useHistory()
const [current, setCurrent] = useState('')




users.getCurrent().then((response) => {
if (!response) return history.push('/')
setCurrent(response)
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