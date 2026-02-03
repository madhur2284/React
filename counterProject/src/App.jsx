import { useState } from 'react'

// prev exists ONLY inside the arrow function you pass to setCount
function addValue(setCount) {
  setCount(prev => prev<20?prev+1:prev);
}

function subValue(setCount) {
  setCount(prev => prev>0?prev-1:prev);
}

//we can't write if and for loop statements in the evaluated exression {} so i make another funciton called addValue and subValue
//First inside onClick i wrote function calls but it didn't work because it was getting into infinite rendering loop
//and we can't even write hooks outside the component(function)
//So i write the anonymous function which is calling the addValue funciton.
//another optimization we do is, we use prev which is the previous state it's not a global varaible it can only be accessible 
//inside the arrow function inside setCount calls. using prev will avoid stale state issue.
function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <button onClick={()=>addValue(setCount)}>count is {count}</button>
      <br />
      <button onClick = {()=>subValue(setCount)}>count is {count}</button>
      <br />
      <button onClick={()=>{setCount(0)}}>count is {count}</button>
    </>
  )
}

export default App
