import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useRef, useContext } from 'react';
import axios from "axios";
import usercontext from '../Store/Usercontext';

export default function Login() {

    const user=useContext(usercontext);
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await axios.post('http://localhost:4001/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
              emailRef.current.value="";
              passwordRef.current.value="";
           const present =response.data.exists;
           //console.log(present);
           if(!present){
            user.exists=0;
            console.log(`user status is :${user.exists}`);
           }
           else{
            user.exists=1;
            console.log(`user status is :${user.exists}`);
           }

          


        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className='lbox1'>
            <div className='lbox2'>
                <div className='lbox3'>
                    <h2>LOGIN</h2>
                    <p>Please enter your Email and password!</p>
                    <form onSubmit={handleLogin}>
                        <div>
                            <input ref={emailRef} type='email' placeholder='Email' className='inputField' required />
                        </div>
                        <div>
                            <input ref={passwordRef} type='password' placeholder='Password' className='inputField' required />
                        </div>
                        <Link  to="/login" className='btn class-title'>Login</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
