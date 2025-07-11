import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`${sticky || !isHome ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      
      <ul className={menuOpen ? 'open' : ''}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/program" onClick={() => setMenuOpen(false)}>Program</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/campus" onClick={() => setMenuOpen(false)}>Campus</Link></li>
        <li><Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
        <li><Link to="/contactus" onClick={() => setMenuOpen(false)}><button className="btn">Contact us</button></Link></li>
      </ul>

      <img
        src={menu_icon}
        alt="menu"
        className='menu-icon'
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </nav>
  );
};

export default Navbar;
