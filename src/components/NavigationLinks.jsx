
import React from 'react';
import './NavigationLinks.css';

const NavigationLinks = ({ links }) => {
  return (
    <nav className="navigation-links">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
