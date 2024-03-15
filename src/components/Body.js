import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {useDispatch} from 'react-redux'
import { auth } from '../utils/Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { AddUser, RemoveUser } from '../utils/AuthenticationSlice'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Login />
  },
  {
    path:'/browse',
    element:<Browse />
  }
])



function Body() {
  const dispatch = useDispatch()
  

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,} = user;
        dispatch(AddUser({uid:uid,email:email,displayName:displayName}))
        // ...
        
      } else {
        // User is signed out
        // ...
        dispatch(RemoveUser())
        
      }
    });
  },[])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body