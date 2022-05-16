import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import SearchBar from '../searchBar/SearchBar'

//home
export default function Navbar() {
  return (
    <div>
      <div className={styles.topnav}>
        <h1 className={styles["h1-navbar"]}>
          <Link to="/home" className={styles["link-home"]}>
            Pokemon 
          </Link>
        </h1>
        <SearchBar/>
           <Link to = '/pokemon'>
                <button className={styles.pokemon}> Crear Pokemon</button></Link> 
          <img  className={styles.img} src="https://eltallerdehector.com/wp-content/uploads/2021/05/Pikachu-Png-Editable.png" alt="not fount"/>
      </div>
    </div>
  );
}
