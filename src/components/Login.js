import React, { useState ,useRef} from 'react'
import Header from './Header'
import { checkValidation } from '../utils/Validate'
import { auth } from '../utils/Firebase'
import {  signInWithEmailAndPassword , createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddUser } from '../utils/AuthenticationSlice'

export const Login = () => {
    const [isSignInForm,setSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    
    const dispatch = useDispatch()



    const toggleSignInForm =()=>{
        setSignInForm(!isSignInForm)
    }

    const handleButtonClick = () =>{
        const message = checkValidation(email.current.value,password.current.value)
        setErrorMessage(message)
        if(message) return
        console.log("name"+ message)

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value,name.current.value)
            .then((userCredential)=>{
                const user = userCredential.user
                updateProfile (user,auth.currentUser, {
                    displayName: name.current.value,                     
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName,} = auth.currentUser;
                    dispatch(AddUser({uid:uid,email:email,displayName:displayName}))
                    
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message) // ...
                  });


            }).catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message
                setErrorMessage(errorCode+" " + errorMessage)
            })
        }
        else{    
            signInWithEmailAndPassword(auth, email.current.value, password.current.value,name?.current?.value)
            .then((userCredential) => { 
            const user = userCredential.user;
            
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" " + errorMessage)
  });
        }
    }
  return (
    <div>
        <Header/>
        <div className="absolute" >
            <img className="" src={"https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"} alt="" />
        </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='p-4 text-3xl font-bold'>{isSignInForm? "Sign In":"Sign Up"}</h1>
                {!isSignInForm && (<input ref={name} className='w-full my-4 p-4 bg-gray-800' placeholder='Enter Name' />)}
                <input ref={email} className='w-full my-4 p-4 bg-gray-800' placeholder='Email or Phone number' type="email" />
                <input ref={password} className='w-full my-4 p-4 bg-gray-800' placeholder='password' type="password" />
                <p className='py-4 text-red-500 font-bold text-lg'>{errorMessage}</p>
                <button className='w-full bg-red-700 p-4 my-6 rounded-md 'onClick={handleButtonClick} >{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={()=>toggleSignInForm()} >New to Netflix?Sign up</p>
            </form>

            {/* <div className='flex'>
                <div>
                    <label className='text-white ml-4' htmlFor="Remember">Remember</label>
                    <input className='text-white ' type="checkbox" name="" id="" />
                </div>
                <a className='text-white' href="signup">Signup</a>
            </div>
                <a href="#lrea">Learn more</a> */}
        
        
        
    </div>
  )
}

export default Login

/*
    - Neflix logo
    - sign card
        - input for email
        - input for password
        - sign button
        - chekbox botton
        - need halp anchertag
        - signup button
        - learn more...
    footer
        - question call
        - FAQ
        - help Center
        - Terms of use 
        - Privacy
        - cookies 
        - information
*/ 