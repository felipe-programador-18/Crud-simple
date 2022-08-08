import React from "react";
import { Link } from "react-router-dom";
import styles from './navi.module.css'

const NavBar = () => {

  return(<>
    <div className={styles.navstyles} >
      
      <Link to='/' >Home</Link>
      <Link to='/registercarros'>Meus Carros</Link>
      
    </div>
  
  </>)

}

export default NavBar