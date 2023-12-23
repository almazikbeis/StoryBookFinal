
import React from 'react';
import './Navbar.css';

const Navbar = ({ logo, links }) => {
  return (
    <nav className="navbar">
      <div className="logo">{logo}</div>
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
