import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Local Vendor Review</div>
      <ul className="nav-links">
        <li>
          <NavLink activeclassname="active" exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/vendors">
            Vendors
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
