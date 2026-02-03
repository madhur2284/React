import UserContextProvider from './Context/UserContextProvider';
import Profile from './Components/profile.jsx';
import Login from './Components/login.jsx'

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
