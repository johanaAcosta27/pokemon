/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {getPokemonById} from '../../actions/index'
import { useParams } from "react-router";
import { useDispatch  , useSelector} from "react-redux";
import { useEffect } from "react";
import styles from '../detail/detail.module.css'
import Navbar2 from "../navBar/NavBar2";


export default function Detail (props){
    const   {id} = useParams()
    const dispatch = useDispatch() 
    const detailsstate = useSelector((state) => state.details) 
    //estados no se limpia al estado. 
    //setear('')
    //searchbar ponerle un cartelito al no encontrar pokemon

 
    useEffect (() => {
      dispatch(getPokemonById(id)) 
   } ,[dispatch]) 

    return (
        <div>
          <Navbar2 />
       {  
         detailsstate.length > 0 ? 
         
         <div className={styles.dt}> 
           <div className={styles.container}>
             <h1 className={styles.title}>{detailsstate[0].name} </h1>
             <img className={styles.imga} src={detailsstate[0].image ? detailsstate[0].image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJSALverhq5fAXGW_4x4ujCcdmhi7op_dDw&usqp=CAU'} />
             <h5 className={styles.type} >Tipo: {!detailsstate[0].createdInDb? detailsstate[0].types + ' ' : detailsstate[0].types.map(t => t.name + (' ') )}</h5>
             <h5 className={styles.type}>Vida: {detailsstate[0].life}</h5>
             <h5 className={styles.type}>Ataque: {detailsstate[0].attack}</h5>
             <h5 className={styles.type}>Defensa: {detailsstate[0].defense}</h5>
             <h5 className={styles.type}>Velocidad: {detailsstate[0].speed}</h5>
             <h5 className={styles.type}>Peso: {detailsstate[0].height}</h5>
             <h5 className={styles.type}>Altura: {detailsstate[0].weight}</h5>
             
            </div>
        
         </div> : 
         
         <div> <h2> Loading... </h2> </div>
  
      }
          </div>
      )
  }
  
  
  
  