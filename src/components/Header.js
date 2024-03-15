import React from 'react'
import Logo from "../utils/image/logo.png"

function Header() {
  return (
    <div className='flex justify-end '>
        <div className='w-screen bg-gradient-to-b from-black absolute'> 
            <img className=' w-60 m-4 z-10 p-8' src={Logo} alt="" />
        </div>
        <div className='flex  w-[15rem] h-40  p-8  '>
          <img className='p-4' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="User Logo" />
          <button className='w-16' >Log out</button>
        </div>
    </div>
  )
}

export default Header