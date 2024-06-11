import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>

<div className='lbox1'>
        <div className='lbox2'>
            <div className='lbox3'>
                <h2>SignUp</h2>
                <p>Please enter your Email and password!</p>
                <div>
                    <input type='email' placeholder='Email' className='inputField' />
                </div>
                <div>
                    <input type='password' placeholder='Password' className='inputField' />
                </div>
                <Link to="/submit" className='btn'>Signup</Link>
            </div>
            <div className='signupPrompt'>
                <p>Already have an account?</p>
                <Link to="/login" className='signupLink'>Login</Link>
            </div>
        </div>
    </div>
    </div>
  )
}
