/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import axios from 'axios';
import {GET_POKEMON, FILTER_TYPE, FILTER_BY_ATTACK, GET_TYPE, GET_NAME_POKEMON, FILTER_CREATED, SORT_NAME, GET_BY_ID, PUT_POKEMON, DELETE_POKEMON} from "./types"


export function getPokemon(){ //para acceder al array de objetos.. 
    return  function(dispatch){
        axios.get("http://localhost:3000/pokemon")
        .then((json)=>{
        axios.get("http://localhost:3000/type")
        .then((json2) =>{

        const apiPoke = json.data?.filter((el)=> !el.createdInDb)
        const dbPoke = json.data?.filter((el)=> el.createdInDb===true)

      for (let x of dbPoke){
        x.types=x.types.map(el=> Object.values(el.name).join(''));
      }
      const allPokemon =[...apiPoke,...dbPoke]
   
        return dispatch({
            type: GET_POKEMON,
            payload: allPokemon
        })
    })
    })
    .catch ((error) => {
        console.log(error)
})
}
}
//getbyid
export function getPokemonById (id){
    return  function(dispatch){
     axios.get(`http://localhost:3000/pokemon/${id}`)
     .then((json) => {
    return dispatch( {
        type : GET_BY_ID,
        payload: json.data
    })
})
.catch ((error) => {
    console.log(error)
})
    }
}

export function filterPokemonsByType(payload){ //value
 try{
    return{
        type: FILTER_TYPE,
        payload
    }
}catch (error){
    console.log(error)
}
}
export function filterCreated(payload){
try{
    return{
        type: FILTER_CREATED,
        payload
    }
}catch (error){
    console.log(error)
}
}
 
export function sort(payload){
  try{
    return{
        type: SORT_NAME,
        payload
    }
}catch (error){
    console.log(error)
}
}

export function filterByAttack(payload){
 try{
    return {
      type: FILTER_BY_ATTACK,
      payload
    }
}catch (error){
    console.log(error)
}
  }

  //searchbar
export function getNamePokemon(name){
  return function (dispatch){
        axios.get('http://localhost:3000/pokemon?name=' + name)
        .then((json) => { 
        axios.get("http://localhost:3000/type")
        .then((json2) => { 
   
        const apiPoke = json.data?.filter((el)=> !el.createdInDb)
        const dbPoke = json.data?.filter((el)=> el.createdInDb===true)

        for (let x of dbPoke){
        x.types=x.types.map(el=> Object.values(el.name).join(''));
}
        const allPokemon =[...apiPoke,...dbPoke]
        return dispatch({
            type: GET_NAME_POKEMON,
            payload: allPokemon 
        })
    })
})
//arreglar el 404 
//resuelve y el que se resuelve.
.catch((error) => {
    console.log(error)
})
  }
}
export function getType(){
    return function (dispatch){
             axios.get('http://localhost:3000/type')
             .then((inf) => {
            return dispatch({
                type: GET_TYPE,
                payload: inf.data
            })
        })
        .catch ((error) => {
            console.log(error)
        })
    }
    }

export function postPokemon(payload){
        return function(dispatch){
              axios.post(`http://localhost:3000/pokemon`,payload)
              .then((json) => {
              return json
            })
            .catch ((error) => {
                console.log(error)
    })
        }
}

export function putPokemon(id,payload){
    return function(dispatch){
          axios.put(`http://localhost:3000/pokemon/${id}`, payload)
            .then((result) => {
            dispatch({
                type: PUT_POKEMON,
                payload: result.data,
            })
    })
    .catch ((error) => {
            console.log(error)
    })
    }
}

export function deletePokemon(id){
    return function(dispatch){
        axios.delete(`http://localhost:3000/pokemon/${id}`)
        .then((r) => {
            dispatch({
                type: DELETE_POKEMON,
                payload: r.data,
            })
        })
        .catch ((error) => {
            console.log(error)
    })
}
}