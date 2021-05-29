import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav >
      <ul className={classes.Navigation}>
        <li><NavLink to="/" exact activeClassName={classes.Active} className={classes.NavLink}>Home</NavLink></li>
        <li><NavLink to="/new" exact activeClassName={classes.Active} className={classes.NavLink}>New Tweet</NavLink></li>
      </ul>
    </nav>
  )
}
