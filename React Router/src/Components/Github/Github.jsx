import React from 'react'
import {useLoaderData} from 'react-router-dom'
const Github = () => {
  let data = useLoaderData();
  return (
    <div>
        <h2>Name: {data.name};</h2>
        <img src={`${data.avatar_url}`} alt="Github image" />
    </div>
  )
}

export default Github

