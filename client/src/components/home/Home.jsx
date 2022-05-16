/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPokemon, filterByAttack, filterPokemonsByType, filterCreated, sort} from "../../actions";
import { Link } from "react-router-dom";
import Paginado from "../paginado/Paginado";
import Card from "../card/Card";
import NavBar from "../navBar/NavBar";
import styles from "../home/home.module.css";

  
export default function Home() {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.pokemon); 

  const [order, setOrder] = useState("");

  //paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(12);
  const indexLastPokemon = currentPage * pokemonPerPage; //12
  const indexFirstPokemon = indexLastPokemon - pokemonPerPage; //12-12=1 
  const currentPokemon = allPokemon.slice(indexFirstPokemon, indexLastPokemon); 


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

//Next Previus
  const paginas = Math.ceil(allPokemon.length / pokemonPerPage);
 
  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]); 

  //Next Previus
  function handleNext(e) {
    e.preventDefault();
    if (currentPage < paginas) {
      setCurrentPage(currentPage + 1);
    }
  }
  function handlePrev(e) {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  //handle buton actualizar
  function handleClick(e) {
    e.preventDefault(); 
    dispatch(getPokemon());
  }
  //types
  function handleFilterType(e) {
  
    dispatch(filterPokemonsByType(e.target.value));
  }
  //select creados por bd o api
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }
  //select fuerzas
  function handleFilterAttack(e) {
    e.preventDefault();
    dispatch(filterByAttack(e.target.value)); 
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function onSelectsChange(e) {
    e.preventDefault();
    dispatch(sort(e.target.value));
    setCurrentPage(1); 
    setOrder(`Ordenado ${e.target.value}`); 
  }

  return (
    <div className={styles.bkg}>
      <NavBar />
      <div className={styles.containerBar}>
        <button className={styles.refresh} onClick={e => handleClick(e)} > Actualizar </button>
      </div>
      <div className={styles.filt}>
        <select onChange={e => onSelectsChange(e)} className={styles.sel}>
          <option value="filtro"> A-Z:</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select onChange={e => handleFilterAttack(e)} className={styles.sel} >
          <option value="fuerza"> Fuerza </option>
          <option value="mayor">Mayor a Menor</option>
          <option value="menor">Menor a Menor</option>
        </select>
        <select onChange={e => handleFilterType(e)} className={styles.sel}>
          <option value="type"> Tipo </option>
          <option value="normal"> Normal </option>
          <option value="flying"> Flying </option>
          <option value="poison"> Poison </option>
          <option value="ground"> Ground </option>
          <option value="bug"> Bug </option>
          <option value="fire"> Fire </option>
          <option value="water"> Water </option>
          <option value="grass"> Grass </option>
          <option value="electric"> Electric </option>
          <option value="fairy"> Fairy </option>
        </select>
        <select onChange={e => handleFilterCreated(e)} className={styles.sel}>
          <option value="Todos"> Todos </option>
          <option value="Creados"> Creados </option>
          <option value="Existentes"> Existentes </option>
        </select>
        <div className={styles.paginado}>
          <Paginado
            pokemonPerPage={pokemonPerPage}
            allPokemon={allPokemon.length}
            paginado={paginado}
          />
        </div>
        <div className={styles.cards}>
          {
            currentPokemon?.map(el => {
              return (
                <Link to={"/pokemon/" + el.id}>
                  <Card
                    name={el.name}
                    image={el.image}
                    types={el.types}
                    key={el}
                  />
                </Link>
              );
            })
          }
        </div>
  
          <div className={styles.ul}>
             <button className={styles.containerNext} onClick={(e) => handleNext(e)}>{">>"}</button>
              <button className={styles.containerPre} onClick={(e) => handlePrev(e)}>{"<<"}</button>
            </div>
        </div>
      </div>
  
  );
}
