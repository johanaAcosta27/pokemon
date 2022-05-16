const { Router } = require("express");
const {getAll} = require("../controller/pokemon");
const router = Router();
const { Pokemon, Type } = require('../db')

//name por query
router.get('/', async (req, res, next) => {
    try {
        const { name }  = req.query; 
        let pokemonsTotal = await getAll(); 
        if (name) { 
          let pokemonName = pokemonsTotal.filter((el) => 
            el.name.toLowerCase().includes(name.toLowerCase())
          );
          pokemonName.length ? 
            res.status(200).send(pokemonName)  :  
            res.status(404).send("El pokemon ingresado no existe"); 
        } else {
          res.status(200).send(pokemonsTotal); 
        }
      } catch (error) {
        next(error);
      }
    });

//por Id
router.get('/:id', async (req, res, next) =>{
try{
    const { id } = req.params;
    const pokemonAll = await getAll();
    if(id) {
         const pokemonId =  pokemonAll.filter((e=> e.id == id));
         pokemonId.length  ?
         res.status(200).json(pokemonId) : //sino
         res.status(404).send('No se encontro el Pokemon')
    }else{
        res.status(200).send(pokemonAll)
    }
} catch (error) {
    next(error);
}
})

//post
router.post("/", async (req, res) => { //Ruta de creacion del pokemon
  try {
    let { name, image, life, attack, defense, speed, height, weight, types, createdInDb} = req.body //Datos que necesito pedir

    if (name) {
    const newPokemon = await Pokemon.create({
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      createdInDb
    });
    types.map(async e=> {
        let typesbd = await Type.findAll({
            where: { name : e }
        })
        newPokemon.addType(typesbd)
    })
    newPokemon?
        res.send('Creado con exito') :
        res.status(404).send('Error')
}
        }catch (err) {
    res.status(400).send("Error en data");
  }
})

//elimiar poke
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
    try{
        res.json (await Pokemon.destroy({ 
          where: { id }
        }))

    }catch (error) {
        res.status(404).send(error);
      } 
    }
)

//actualizar
router.put("/:id", async (req,res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      if(id) {
            const put = await Pokemon.update({name},{
              where: {
                id,
              }
            })
            
        res.status(200).send({ message: "Modificado" });
        
      }
      } catch (error) {
        res.status(404).send(error);
      } 
    });
  
module.exports = router;

