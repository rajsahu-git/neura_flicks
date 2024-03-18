import React from 'react'
import Logo from "../utils/image/logo.png"
import {  signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const handleToSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
  // An error happened.
});
  }
  
  return (signOut)? (
    <div className='flex justify-between z-10 absolute w-screen bg-gradient-to-b from-black '>
        <div className=''> 
            <img className=' w-60 m-4  p-8' src={Logo} alt="" />
        </div>
        <div className='flex z-10  h-40  p-8 '>
          <img className='p-4' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="User Logo" />
          <button className='w-20 m-4 rounded-lg h-12 bg-red-600 text-white' onClick={handleToSignOut} >Log out</button>
        </div>
    </div>
  ):( <div className=''> 
  <img className=' w-60 m-4  p-8' src={Logo} alt="" />
</div>)
}

export default Header