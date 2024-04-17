import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Movie_Details from './Movie_Details'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Login />
  },
  {
    path:'/browse',
    element:<Browse />,
    
  },
  {
    path: "/movie_details/:movie_id",
    element: <Movie_Details />,
  },
])



function Body() {
  


  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body






