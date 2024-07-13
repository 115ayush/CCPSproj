// SignUp.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCoordi, setIsCoordi] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4001/signup', { email, password, isCoordi });
            console.log('Signup successful:', response.data);
            // Redirect or show success message as needed
        } catch (error) {
            console.error('Error signing up:', error.response.data);
            // Handle error (show message, reset form, etc.)
        }
    };

    return (
        <div>
            <div className='lbox1'>
                <div className='lbox2'>
                    <div className='lbox3'>
                        <h2>SignUp</h2>
                        <p>Please enter your Email and password!</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='inputField'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='inputField'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="checkbox-container">
                                <label>
                                    <input
                                        type='checkbox'
                                        checked={isCoordi}
                                        onChange={(e) => setIsCoordi(e.target.checked)}
                                    />
                                    <span>Is he a coordinator?</span>
                                </label>
                            </div>
                            <button type='submit' className='btn'>Add Member</button>
                        </form>
                    </div>
                    <div className='signupPrompt'>
                        <Link to="/" className='signupLink'>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}