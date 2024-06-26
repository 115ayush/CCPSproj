import React from 'react';
import './ResponseForm.css';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const ResponseForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const company = location.state?.company;
    const user=location.state?.user;
   // console.log("from response",user);

    const cnameRef = useRef();
    const hrnameRef = useRef();
    const hrnumRef = useRef();
    const hremailRef = useRef();
    const responseRef = useRef();
    const dateRef = useRef();
    const messageRef = useRef();

    const handleSubmit =async  (e) => {
        e.preventDefault();
        const companyResponse = {
            name: cnameRef.current.value,
            hrname: hrnameRef.current.value,
            hrNumber: hrnumRef.current.value,
            hremail: hremailRef.current.value,
            response: responseRef.current.value,
            date: dateRef.current.value,
            message: messageRef.current.value
        };
       // console.log(response); // Log the response object
        // Here you can add logic to send this data to a server or perform other actions

        try {
          const response = await axios.post('http://localhost:4001/submit-response', 
            companyResponse);
        console.log(response.data.message);
        navigate("/");
          
      } catch (error) {
          console.error('There was an error!', error);
      }







        //






       
    }

    return (
        <div className="response-form-container">
            <div className="form-card">
                <h2>Response Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name:</label>
                        <input type="text" id="companyName" name="companyName" ref={cnameRef} defaultValue={company?.name || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hrName">HR Name:</label>
                        <input type="text" id="hrName" name="hrName" ref={hrnameRef} defaultValue={company?.hrname || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hrNumber">HR Number:</label>
                        <input type="tel" id="hrNumber" name="hrNumber" ref={hrnumRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hrEmail">HR Email:</label>
                        <input type="email" id="hrEmail" name="hrEmail" ref={hremailRef} defaultValue={company?.hremail || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="response">Response:</label>
                        <input type="text" id="response" name="response" ref={responseRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" name="date" ref={dateRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" ref={messageRef}></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <Link to="/" className="home-link">Home</Link>
            </div>
        </div>
    );
};

export default ResponseForm;