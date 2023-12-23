
import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({ items }) => {
  return (
    <aside className="sidebar-menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarMenu;
