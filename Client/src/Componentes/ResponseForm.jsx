import React from "react";
import './ResponseForm.css';
import backgroundImage from '../bg.jpg';
import iconImage from '../icon.png'; 
import { Link } from 'react-router-dom';


const ResponseForm = () => {
  return (
    <div className="rbox1" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh', width: '100%' }}>
    <div className="rbox2">
    <form className="c2" action="/submit" method="post">
      <label className="Name">Person Name:</label><br />
      <input type="text" id="personName" name="personName" /><br />

      <label className="Name">Company Name:</label><br />
      <input type="text" id="companyName" name="companyName" /><br />

      <label className="Name">HR Name:</label><br />
      <input type="text" id="hrName" name="hrName" /><br />

      <label className="Name">HR Number:</label><br />
      <input type="tel" id="hrNumber" name="hrNumber" /><br />

      <label className="Name">HR Email:</label><br />
      <input type="email" id="hrEmail" name="hrEmail" /><br />

      <label className="Name">Response:</label><br />
      <input type="text" id="response" name="response" /><br />

      <label className="Name">Date:</label><br />
      <input type="date" id="date" name="date" /><br />

      <label className="Name">Time:</label><br />
      <input type="time" id="time" name="time" /><br />

      <label className="Name">Department:</label><br />
      <select id="department" name="department">
        <option value="CSE">CSE</option>
        <option value="Electrical">Electrical</option>
        <option value="Mechanical">Mechanical</option>
        <option value="DSAI">DSAI</option>
        <option value="Mechatronics">Mechatronics</option>
      </select><br />

      <label className="Name">Message:</label><br />
      <textarea id="message" name="message"></textarea><br />

      <input type="submit" value="Submit" color="blue" />
      <div className="icon-container">
        <Link to="/">
            <img src={iconImage} alt="Icon" className="icon" />
            </Link>
          </div>
    </form>
  </div>
  </div>
  );
}

export default ResponseForm;
