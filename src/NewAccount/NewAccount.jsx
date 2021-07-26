import React from 'react'

export const NewAccount =()=>{
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
