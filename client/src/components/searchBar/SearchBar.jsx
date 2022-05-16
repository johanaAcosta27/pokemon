import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getNamePokemon } from '../../actions';
import styles from '../searchBar/searchBar.module.css'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")


function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNamePokemon(name)) 
    setName(" ") 
}
    return(
        <div className={styles.search}>
            <input className={styles.input} type = 'text' placeholder='Buscar..' onChange = {(e) => handleInputChange(e)}/>
            <button className={styles.btnsearch} type = 'submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )
}