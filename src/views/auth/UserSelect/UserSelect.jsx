import {Layout} from'../../../components/Layout'
import { useUserSelect} from './UserSelect.useUserSelect'

export const UserSelect =()=>{
const {localUsers}= useUserSelect()

    return <Layout secondary={['Cancel','/']}primary={['user not listed','/auth/signin']} title={'Sign In'}>
        {localUsers.map(({id,email})=>(
            <div>{id}{email}</div>
        ))}
    </Layout>

}
export default UserSelect;