import React from 'react';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-logo">
          <a href="/" className="logo-link">
            <svg className="bi" width="30" height="24" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="footer-text">© 2024 Company, Inc</span>
        </div>
        <ul className="footer-socials">
          <li><a href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
          <li><a href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
          <li><a href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
