import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../landingPage/landingPage.module.css'


export default function LandingPage(){
    return(
        <div className={styles.landing}>
            <h1 className={styles.wlc}>Bienvenidos <br/>  a mi pagina</h1>
            <Link to = '/home'>
                <button className={styles.btn}>Ingresar</button>
            </Link>
        </div>
    )
} 