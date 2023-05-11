import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Main from "./Main"
import Quiz from './Quiz'
import "../styles/app.css"
import { CheckUserExist } from '../helper/helper'
import Result from './Result'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/quiz',
    element: <CheckUserExist><Quiz/></CheckUserExist> 
  },
  {
    path: '/result',
    element: <CheckUserExist><Result/></CheckUserExist>
  }
])
const App = () => {
  return (
<>
<RouterProvider router={router} />
</>
    )
}

export default App;



