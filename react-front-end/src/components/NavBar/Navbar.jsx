import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaVimeoV, FaPinterestP, FaGooglePlusG } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BsTwitter,  } from 'react-icons/bs';
import './Navbar.css';

function Navbar() {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleSidebar = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className={`nav-container ${isNavVisible ? 'open' : ''} d-flex flex-column align-items-center`}>
      <nav className="burger">
        <button type="button" aria-label="Navigation" className="toggle-button" onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </button>
      </nav>

      <nav className={`nav ${isNavVisible ? 'show' : 'hidden'}`}>
          <img className="logo-img" src="https://th.bing.com/th/id/OIG4.e2TdRPOPLhsW0eZMF6_J?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="logo" />
        <ul className="sidenav-list d-flex flex-column justify-content-center">
          <li className="sidenav-item">
            <NavLink to="/LandingPage" className="sidenav-link" onClick={toggleSidebar}>
              Home
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/Login" className="sidenav-link" onClick={() => { toggleSidebar(); }}>
            Login
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/Signup" className="sidenav-link" onClick={() => { toggleSidebar(); }}>
              Sign Up
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/AddDeveloper" className="sidenav-link" onClick={() => { toggleSidebar(); }}>
            Add Developer
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/DeleteDeveloper" className="sidenav-link" onClick={() => { toggleSidebar(); }}>
            Remove Developer
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/MyReservations" className="sidenav-link" onClick={toggleSidebar}>
              My Reservations
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/newreservation" className="sidenav-link" onClick={toggleSidebar}>
              New Reservation
            </NavLink>
          </li>
        </ul>
        <div className="sidenav-footer">
          <ul className="sidebar-socials">
          <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <BsTwitter />
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <FaFacebookF />
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <FaGooglePlusG />
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <FaVimeoV />
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
                <FaPinterestP />
              </NavLink>
            </li>
          </ul>
          <p className="copyright">
            <span><AiOutlineCopyrightCircle /></span>
            2024 Web Developers Own
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

