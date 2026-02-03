import { useState } from 'react'
import Btn from './btn'
function App() {
  let [bgcolor, setbgcolor] = useState("aliceblue");
  let arr = ["Red", "Green", "Blue", "Olive", "Gray", "Yellow", "Pink", "Purple", "Lavender", "White", "Black"];
  return (
    <>
      <div style={
        {
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: bgcolor
        }
        }>
        <div style={
          {
            height: 100,
            width: 1000,
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: 'bisque',
            borderRadius: 15,
            border: 'none',
            gap: 5,
            margin: 10,
          }
        }>
          <Btn color="Red" onClick={setbgcolor}/>
          <Btn color="Green" onClick={setbgcolor}/>
          <Btn color="Blue" onClick={setbgcolor}/>
          <Btn color="Olive" onClick={setbgcolor}/>
          <Btn color="Gray" onClick={setbgcolor}/>
          <Btn color="Yellow" onClick={setbgcolor}/>
          <Btn color="Pink" onClick={setbgcolor}/>
          <Btn color="Purple" onClick={setbgcolor}/>
          <Btn color="Lavender" onClick={setbgcolor}/>
          <Btn color="White" onClick={setbgcolor}/>
          <Btn color="Black" onClick={setbgcolor}/>
        </div>
      </div>
    </>
  )
}

export default App
