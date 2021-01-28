import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import FavoriteTeams from '../FavoriteTeams/FavoriteTeams';

export default function NavBar() {
  return (
    <div className="navbar-main-container">
      <div className="navbar-content container">
      <div className="logo">
      <a href="/">
      <FontAwesomeIcon icon={faFutbol} />
      Football Teams
      </a>
      </div>
      <div className="fav-teams">
          <FavoriteTeams/>
      </div>
      </div>
    </div>
  );
}
