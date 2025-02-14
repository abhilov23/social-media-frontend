import React from 'react'
import "./register.css";

export default function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Circlify</h3>
            <span className='loginDesc'>Connect with friends and the world around you on Circlify.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="Email" placeholder='Username / Email' className="loginInput" />
                <input type="password" placeholder='Password' className="loginInput" />
                <input type="password" placeholder='Password Again' className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">Login into Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
