import React, {useContext, useState} from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
  const [userName, setUserName] = useState('');
  const {setUser} = useContext(UserContext);
  const handleSubmit = (e)=>{
    e.preventDefault();
    setUser(userName);
  }
  return (
    <>
        <h2>Login</h2>
        <form>
            <input type='text'
            value={userName}
            placeholder="Username"
            onChange={(e)=>setUserName(e.target.value)}
            />
            <button type='submit' onClick={(e)=>handleSubmit(e)}>
                Submit
            </button>
        </form>
    </>
  )
}

export default Login