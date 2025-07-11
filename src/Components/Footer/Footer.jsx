import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; 2025 Educity. All rights reserved.</p>

      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Footer;
