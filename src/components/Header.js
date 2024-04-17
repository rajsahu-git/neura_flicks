import React, {useEffect} from 'react'
import Logo from "../utils/image/logo.png"
import {  signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { AddUser, RemoveUser } from '../utils/AuthenticationSlice'
import { toggleGptSearchView } from '../utils/GptSearchSlice';
import GptSearch from './GptSearch'
// import { useSelector } from 'react-redux'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const authentication = useSelector((store)=> store.authentication)
  const showGptSearchView = useSelector(store=>store.gpt.showGptSearch)
  

  const handleToSignOut = () =>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
  
});
  }
  const GptSearchHandler =()=>{
    dispatch(toggleGptSearchView())
  }
  // console.log(GptSearchHandler())
  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,} = user;
        dispatch(AddUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...z`
        dispatch(RemoveUser())
        navigate("/")
        
      }
    });
    return()=> unsubscribe()
  },[])
  
  return  (
    
    <div className='flex justify-between z-10 absolute w-screen bg-gradient-to-b from-black '>
         
        <div className=''> 
            <img className=' w-60 m-4  p-8' src={Logo} alt="" />
        </div>
        
        {authentication && (
      
        <div className='flex z-10  h-40  p-8 '>
          <button className='px-4 py-2 h-14 mt-5 rounded-lg bg-[#38ada9] text-orange-50' onClick={GptSearchHandler} >{showGptSearchView? "Home Page":"GPT Search"}</button>
          <img className='p-4' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="User Logo" />
          <h2>{authentication.displayName}</h2>
          <button className='w-20 m-4 rounded-lg h-12 bg-red-600 text-white' onClick={handleToSignOut} >Log out</button>
        </div>
          )
        }
    </div>
  )
}

export default Header