const { Router } = require('express');
const axios = require("axios");
const{ Type } = require('../db')

const router = Router();

router.get("/", async (req, res, next) => {
    try {
      const api = await axios.get("https://pokeapi.co/api/v2/type"); 
      const types = await api.data 
      for (t of types.results) { 
       //console.log(types)
      Type.findOrCreate({ 
          where: {name: t.name}}); 
      }
      res.json(await Type.findAll()); 
    
    } catch (error) {
      next(error);
    }
  });
  
  module.exports= router; 