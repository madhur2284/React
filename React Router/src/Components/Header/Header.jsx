import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="shadow sticky top-0 z-50 h-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
        <div>
          <Link
            to="/"
          >
            <div className="flex">
              <h1 className="text-3xl font-extrabold text-purple-700">Your</h1>
              <h1 className="text-2xl font-extrabold text-blue-700">Logo</h1>
            </div>
          </Link>
        </div>
        <div className="flex justify-around">
          <ul className="flex justify-around w-100">
            <li>
              <NavLink
                to="/"
                className={({isActive})=>
                    isActive?"text-orange-700":"text-slate-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
                <NavLink
                to="/about"
                  className={({isActive})=>
                    isActive?"text-orange-700":"text-slate-700"
                  }
                >
                  About
                </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({isActive})=>
                    isActive?"text-orange-700":"text-slate-700"
                }
              >
                Contact
              </NavLink>
            </li>
                <li>
              <NavLink
                to="/github"
                className={({isActive})=>
                    isActive?"text-orange-700":"text-slate-700"
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-between w-40">
          <button className="rounded-2xl h-12 w-16 text-black bg-purple-500 hover:text-white hover:bg-purple-800 flex items-center justify-center">
            SignUp
          </button>
          <button className="rounded-2xl h-12 w-16 text-black bg-blue-500 hover:text-white hover:bg-blue-800 flex items-center justify-center">
            Login
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header