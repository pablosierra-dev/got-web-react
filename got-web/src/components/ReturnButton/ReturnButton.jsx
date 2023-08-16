import "./ReturnButton.css"
import React from 'react';
import { NavLink } from 'react-router-dom';

function ReturnButton({ to }) {
  return (
    <div>
      <NavLink to={ to } className="return-button">
        <img src="/img/arrow-icon.png" alt='arrow'/>
      </NavLink>
    </div>
  );
}

export default ReturnButton;