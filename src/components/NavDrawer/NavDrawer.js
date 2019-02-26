import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavDrawer.sass';

const navDrawer = props => {
  let drawerClasses = 'nav-drawer';
  if (props.show) {
    drawerClasses = 'nav-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><NavLink to={{pathname: '/', search: window.location.search}} exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to={{pathname: '/browse', search: window.location.search}} activeClassName="active">Browse</NavLink></li>
        <li><NavLink to={{pathname: '/playlists', search: window.location.search}} activeClassName="active">My Playlists</NavLink></li>
        <li><NavLink to={{pathname: '/top', search: window.location.search}} activeClassName="active">My Stats</NavLink></li>
      </ul>
    </nav>
  );
};

export default navDrawer;
