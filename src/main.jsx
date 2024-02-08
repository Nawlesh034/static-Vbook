import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/About us/About.jsx'
import Contact from './Component/Contact us/Contact.jsx'
import Header from './Component/Header/Header.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
