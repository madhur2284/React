import React from 'react'

const Navbar = ({fn}) => {
  return (
    <div className="h-15 w-screen bg-slate-400 flex justify-around">
        <ul className="text-white text-2xl w-screen flex justify-between mx-15">
            <li><button className="hover:text-red-400" onClick={()=>{
                fn(0);
            }}>HTML</button></li>
            <li><button className="hover:text-red-400" onClick={()=>{
                fn(1);
            }}>CSS</button></li>
            <li><button className="hover:text-red-400" onClick={()=>{
                fn(2);
            }}>JS</button></li>
        </ul>
    </div>
  )
}

export default Navbar