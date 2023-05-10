import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Main from "./Main"
import Quiz from './Quiz'
import "../styles/app.css"
import Result from './Result'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/quiz',
    element: <Quiz/>
  },
  {
    path: '/result',
    element: <Result/>
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



