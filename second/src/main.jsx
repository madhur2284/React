import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const Element = (<a href="https:\\www.google.com" target="_blank">click to visit google</a>);

// createRoot(document.getElementById('root')).render(
//   Element
// )

const reactElement = React.createElement(
  'a',
  {href: 'https:\\www.google.com', target: '_blank'},
  'Click to visit Google my future Company'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // 1.)
  <>
    {reactElement}
    <App />
  </>

  // 2.)
  // reactElement



)
