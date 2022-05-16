import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

//para componente PokemonCreated

export default function Navbar2 () {
  return (
    <div>
      <div className={styles.topnav}>
        <h1 className={styles["h1-navbar"]}>
          <Link to="/home" className={styles["link-home"]}>
            Pokemon 
          </Link>
        </h1>
          <img  className={styles.img} src="https://eltallerdehector.com/wp-content/uploads/2021/05/Pikachu-Png-Editable.png" alt="not fount"/>
      </div>
    </div>
  );
}
