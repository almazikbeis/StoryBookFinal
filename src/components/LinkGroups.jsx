
import React from 'react';
import './LinkGroups.css';

const LinkGroups = ({ groups }) => {
  return (
    <div className="link-groups">
      {groups.map((group, index) => (
        <div key={index} className="link-group">
          <h3>{group.title}</h3>
          <ul>
            {group.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LinkGroups;
