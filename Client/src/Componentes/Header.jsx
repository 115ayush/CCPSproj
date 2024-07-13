// Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../user.png';
import './Header.css';

const Header = ({ user, handleLogout }) => {
  const [profileImage, setProfileImage] = useState(image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <svg className="bi" width="32" height="32" role="img" aria-label="Logo">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/features" className="nav-link">Features</Link></li>
            <li className="nav-item"><Link to="/faqs" className="nav-link">FAQs</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          </ul>
        </nav>

        <div className="header-profile">
          {user.exists === 1 ? (
            <div className="profile-dropdown">
              <button className="profile-dropdown-toggle">
                <img src={profileImage} alt="Profile" className="rounded-circle" width="32" height="32" />
              </button>
              <ul className="dropdown-menu profile-dropdown-menu">
                <li>
                  <span className="dropdown-item user-email">{user.email}</span>
                </li>
                <li>
                  <label className="dropdown-item change-pic-label">
                    Change Profile Picture
                    <input type="file" onChange={handleImageChange} className="change-pic-input" />
                  </label>
                </li>
                <li>
                  <button onClick={handleLogout} className="dropdown-item logout-link">Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/Login" className="login-button">Login</Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;