import React, { useRef } from 'react';
import './Login.css';
import axios from 'axios';

export default function Login({ handleLogin }) {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post('http://localhost:4001/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            });

            const present = response.data.exists;
            if(!present){
                alert("wrong credentials");
            }
            const user = {
                exists: present ? 1 : 0, // Ensure 'exists' is set correctly
                email: emailRef.current.value,
            };

           
            emailRef.current.value = "";
            passwordRef.current.value = "";
            // Call handleLogin to update parent component's state if needed
            handleLogin(user);

            // Clear input fields
            

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
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input ref={emailRef} type='email' placeholder='Email' className='inputField' required />
                        </div>
                        <div>
                            <input ref={passwordRef} type='password' placeholder='Password' className='inputField' required />
                        </div>
                        <button type='submit' className='btn class-title'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
