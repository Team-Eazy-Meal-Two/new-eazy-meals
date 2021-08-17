import {Layout} from'../../../components/Layout';
import { useUserSelect} from './UserSelect.useUserSelect';
import {ItemPreview} from "../../../components/ItemPreview"

export const UserSelect =()=>{
const {localUsers}= useUserSelect()

    return <Layout secondary={['Cancel','/']}primary={['user not listed','/auth/signin']} title={'Sign In'}>
        {localUsers.map(({id, image, name , activity}, index)=>(
           <ItemPreview  first={index<1} key={id} title={name} image={URL.createObjectURL(image)}
        //    helper={activity || activity.toString()}
           />
        ))}
    </Layout>

}
export default UserSelect;