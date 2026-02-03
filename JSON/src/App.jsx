import data from './data.json'
import {useState} from 'react'
import Navbar from './Navbar'

function App() {
  const [index, setindex] = useState(0);
  return (
    <>
      <Navbar fn={setindex}/>
      <h2>Title: {data[index].Title}</h2>
      <br />
      <h2>Full Form: {data[index]['Full Form']}</h2>
      <br />
      <h2>Use Case: {data[index]['USE Case']}</h2>
    </>
  )
}

export default App
