const { Router } = require('express');
const{Pokemon, Type} = require('../db')
const axios = require ('axios');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

//api
const getApiInfo = async () => {
    try{
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
    .then((data) => {
        return data.data.results;
    })
    .then((data) => {
        return Promise.all(data.map((res) => axios.get(res.url)))
    })
    .then((data) => {
        return data.map((res) => res.data);
    })


    const allPokemon =  apiUrl.map((r) => {
        return {
            id: r.id,
            name: capitalizeFirstLetter(r.name),
            types: r.types.map((t) => t.type.name),
            image: r.sprites.front_default,
            life: r.stats[0].base_stat,
            attack: r.stats[1].base_stat,
            defense: r.stats[2].base_stat,
            speed: r.stats[3].base_stat,
            height: r.height,
            weight: r.weight,
          };
        });
        return allPokemon
           }catch (err){
        console.log(err);
    }
}

//base de datos
const getBdInfo = async () => {
try{
    const bd = await Pokemon.findAll({
        include: {
            model: Type,
            attributes : ['name'],
            through:{ 
                attributes: [],
            }
        }
    })
     return bd;
}catch (err){
      console.log(err);
}
}

//concatenar api con bd
const getAll = async () => {
    const apiInfo = await getApiInfo();
    const dbinfo = await getBdInfo();
    const all = [...apiInfo,...dbinfo];

    return all;
} 

module.exports = { 
    getAll,
    getBdInfo,
    getApiInfo

    }; 
    