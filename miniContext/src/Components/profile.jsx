import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'


const Profile = () => {
  let {user} = useContext(UserContext)
  return (
    <div>
        <h2>{user?`hello ${user}✌️`:"Login pls😜"}</h2>
    </div>
  )
}

export default Profile