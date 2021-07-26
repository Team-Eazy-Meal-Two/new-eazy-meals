import {useState} from 'react'

export const useNewAccount =()=>{
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [confirmPassword,setconfirmPassword]=useState('')

    return {
        email,
        password,
        confirmPassword ,
        setEmail,
        setPassword
    }

} 
export default useNewAccount