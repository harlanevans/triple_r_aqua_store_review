import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div style={styles.wrapper}>
      <div style={styles.mainNav}>
        <Link to="/" style={styles.navItem}>
          Home
        </Link>
        <Link to="/aquas" style={styles.navItem}>
          Aquas
        </Link>
       
      </div>
    </div>
  );
}

export default Navbar;

const styles = {
  wrapper: {
    padding: '1em'
  },
  mainNav: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    width: '50%',
  },
  navItem: {
    padding: '0 1em',
    textDecoration: 'none',
    color: 'lightblue'
  },

}