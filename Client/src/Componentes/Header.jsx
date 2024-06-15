import React, { useState  } from 'react';
import { Link } from 'react-router-dom';
import image from '../user.png'; 

const Header = ({user,handleLogout}) => {
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
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
          <li><Link to="/features" className="nav-link px-2">Features</Link></li>
         
          <li><Link to="/faqs" className="nav-link px-2">FAQs</Link></li>
          <li><Link to="/about" className="nav-link px-2">About</Link></li>
        </ul>

       {  user.exists===1?<div className="col-md-3 m-3 text-center">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="profile-pic">
                  <img src={profileImage} alt="Profile Picture" className="rounded-circle" width="40" height="40"  />
                </div>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                <label className="dropdown-item ">
                      {user.email}
                  </label>
                  <label className="dropdown-item ">
                    Change Profile Picture
                    <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
                  </label>
                </li>
                <li><div  onClick={handleLogout} className="dropdown-item" to="/Login">Logout</div></li>
              </ul>
            </li>
          </ul>
        </div> : <Link to="/Login" className='btn class-title'>Login</Link>
         }
      </header>
    </div>
  );
}

export default Header;
