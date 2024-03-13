import React from 'react'
import Logo from "../utils/image/logo.png"

function Header() {
  return (
    <div>
        <div>
            <img className='bg-gradient-to-r from-black absolute w-60 m-4 z-10 p-8' src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Header