import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../user.png';
import './Header.css'; // Import the new CSS file

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
            <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/features" className="nav-link">Features</Link></li>
            <li><Link to="/faqs" className="nav-link">FAQs</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
          </ul>
        </nav>

        <div className="header-profile">
          {user.exists === 1 ? (
            <div className="profile-dropdown">
              <div className="profile-pic">
                <img src={profileImage} alt="Profile" className="rounded-circle" width="40" height="40" />
              </div>
              <ul className="dropdown-menu">
                <li>
                  <label className="dropdown-item">
                    {user.email}
                  </label>
                  <label className="dropdown-item change-pic-label">
                    Change Profile Picture
                    <input type="file" onChange={handleImageChange} className="change-pic-input" />
                  </label>
                </li>
                <li>
                  <div onClick={handleLogout} className="dropdown-item logout-link">Logout</div>
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
