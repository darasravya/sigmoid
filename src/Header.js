import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className="page-header">
      <h>{props.title}</h>
    </div>
  );
}

export default Header;