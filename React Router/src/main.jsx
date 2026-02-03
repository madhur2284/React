import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />
//             },
//             {
//                 path: "About",
//                 element: <About />
//             },
//             {
//                 path: "Contact",
//                 element: <Contact />
//             }
//         ]
//     }
// ])


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="user/:userid" element={<User />}/>
            <Route 
                path="github" 
                element={<Github />} 
                loader={async ()=>{
                    const response = await fetch("https://api.github.com/users/madhur2284");
                    const data = await response.json();
                    return data;
                }}
            />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
