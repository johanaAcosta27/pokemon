/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../paginado/paginado.module.css'


export default function Paginado({pokemonPerPage, allPokemon, paginado}){
    const pageNumber = []

    for( let i=1; i <= Math.ceil(allPokemon/pokemonPerPage); i++){
        pageNumber.push(i)
    }//numero redondo de todos los pokemon /pokemon por pag
    return(
        //renderiza los numeros
        <nav >
        <ul className={styles.ul}>
            {
                pageNumber && pageNumber.map((n, index) => ( 
                    <li  key={n}>
                    <a className={styles.container} onClick= {() => paginado(n)}  key={index}>{n}</a> 
                    </li>
                )) 
            }
        </ul>
    </nav>
    )
}


              
