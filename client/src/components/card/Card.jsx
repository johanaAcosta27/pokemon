import React from 'react';
import styles from '../card/card.module.css'

export default function Card({ name, types, image }) { //props 
    return(
        <div className={styles.cardAll}>
            <div className={styles.cards}>
                 <h1 className={styles.title}>{name}</h1>
                 <h5 className={styles.containerDiet}>{types}</h5>
                 <img className={styles.img} src = { image? image:'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712__480.png' } alt ='img not found' width='400px'  height='450px'/>
            </div>
        </div>

    )
}
 
