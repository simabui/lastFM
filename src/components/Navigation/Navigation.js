import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <NavLink exact to="/" activeClassName="selected">
        Home
      </NavLink>
      <NavLink
        to="/search"
        activeClassName="selected"
        className={styles.search}
      >
        Search
      </NavLink>
    </div>
  );
}
