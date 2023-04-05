import React, { useEffect, useState } from 'react';
import "./Auth.css"
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

import {Signin,Signup} from "../../actions/auth";

const Auth = () => {
  const [isSignUp, setIsSignIn] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userAuth, setUserAuth] = useState({ first_name: "", last_name: "", email: "", password: "", confirm_password: "" })

  useEffect(() => {
    console.log(userAuth)
  }, [])
  const toggle = () => {
    setIsSignIn(!isSignUp)
  }
  const handleSubmit=()=>{
    if(isSignUp){
      dispatch(Signup(userAuth,navigate))
    }else{
      dispatch(Signin(userAuth,navigate))
  }}

  const googleSuccess = async (res) => {
    const token = res?.credential
    
    const result = jwt_decode(token);
    
    

    try {
      dispatch({ type: "AUTH", data: { result, token } })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
    
    
  }
  const googleFailure = (error) => console.log(error)
  return (
    <div className='body'>
      <div className='container'>
        <h3 className='title'>{isSignUp ? "SignUp" : "SingIn"}</h3>
        {isSignUp && (<>
          <input className='input_style' type="text" placeholder='First Name' name='first_name' onChange={(e) => setUserAuth({ ...userAuth, first_name: e.target.value })} value={userAuth.first_name} />
          <input className='input_style' type="text" placeholder='Last Name' name='last_name' onChange={(e) => setUserAuth({ ...userAuth, last_name: e.target.value })} value={userAuth.last_name} />
        </>)}
        <input className='input_style' type="email" placeholder='Email' name='email' onChange={(e) => setUserAuth({ ...userAuth, email: e.target.value })} value={userAuth.email} />
        <input className='input_style' type="password" placeholder='Password' name='password' onChange={(e) => setUserAuth({ ...userAuth, password: e.target.value })} value={userAuth.password} />
        <input className='input_style' type="password" placeholder='Confirm Password' name='confirm_password' onChange={(e) => setUserAuth({ ...userAuth, confirm_password: e.target.value })} value={userAuth.confirm_password} />
        <button className='login_Btn' onClick={handleSubmit}>{isSignUp ? "Sign Up" : "Sign In"}</button>
        <GoogleLogin
          clientId='985843998076-vnr7mjog8bo2bdvid7q0qk2h4j76sp4v.apps.googleusercontent.com'
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
          width='180px'
          theme='outline'
          text='Sign in with Google'
          size='large'
          shape='square'
          logo_alignment='center'

        />
          
        
        <button className='Toogle_login' onClick={toggle} >{isSignUp ? "Don't have an Account" : "Allready have an Account"}</button>



      </div>
    </div>
  )
}

export default Auth
