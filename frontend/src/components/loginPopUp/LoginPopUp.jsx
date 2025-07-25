import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/frontend_assets/assets'

function LoginPopUp({setShowLogin}) {
    const [currState ,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form action="" className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img   onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
        {currState === "Login" ? <></> : <input type='text' placeholder='Your Name' required/>}
          <input type='email' placeholder='your email' required/>
          <input type='password' placeholder='password' required/>

        </div>
        <button>{currState === "sign up" ? "create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type='checkBox' required />
          <p>By continuing , i agree to the terms of use and privacy policy </p>

        </div>
        {currState === "Login"
        ?<p>Create a new account? <span onClick ={() =>setCurrState("sign up")}>Click here</span></p>
      : <p>Already have an account? <span onClick={() =>setCurrState("Login")}> Login here</span></p>
        }
      </form>
      
    </div>
  )
}

export default LoginPopUp;
