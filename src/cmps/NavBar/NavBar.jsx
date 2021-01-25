import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  return (
    <div className="navbar-main-container">
      <a href="/">
      <div className="navbar-content container">
      <div className="logo">
      <FontAwesomeIcon icon={faFutbol} />
      Football Teams</div>
      </div>
      </a>
    </div>
  );
}
