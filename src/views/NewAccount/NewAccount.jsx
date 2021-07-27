import React from 'react'
import {Layout} from '../../components/Layout'
import{ Input} from '../../components/Input'
import { tokens} from '../../data/tokens'
import {useNewAccount}from './NewAcount.useNewAccount'


export const NewAccount =()=>{
    const { email,password,confirmPassword,setEmail,setPassword,setconfirmPassword}=useNewAccount()
    return (
        <Layout
        title='New Acount'
        secondary={['Cancel','/']}
        primary ={['Create Account',()=> console.log('asssd')]}

        >
        <Input Label='Email'type ='email'/>
        <Input Label='Password' type= 'password'/>
        <Input Label=' Confirm Password' type= 'ConfimPassword'/>

        </Layout>

    )
}
    export default NewAccount;
