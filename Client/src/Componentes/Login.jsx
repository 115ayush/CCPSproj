import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='lbox1'>
        <div className='lbox2'>
            <div className='lbox3'>
                <h2>LOGIN</h2>
                <p>Please enter your Email and password!</p>
                <div>
                    <input type='email' placeholder='Email' className='inputField' />
                </div>
                <div>
                    <input type='password' placeholder='Password' className='inputField' />
                </div>
                <Link to="/submit" className='btn'>Login</Link>
            </div>
            <div className='signupPrompt'>
                <p>Don't have an account?</p>
                <Link to="/signup" className='signupLink'>Sign Up</Link>
            </div>
        </div>
    </div>

    );
}
