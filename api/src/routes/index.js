const { Router } = require('express');
const typeRouter = require('./type.js');
const pokemonRouter = require('./pokemon.js');



const router = Router();

router.use('/pokemon', pokemonRouter);
router.use('/type', typeRouter);



module.exports = router;

