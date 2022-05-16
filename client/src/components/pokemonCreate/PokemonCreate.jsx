import React from "react";
import { useState, useEffect } from "react";
import { postPokemon, getType } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "./pokemonCreate.module.css";
import NavBar2 from "../navBar/NavBar2";

//validaciones
function validate(input) {
  let errors = {}; //objetos de errores
  if (!input.name) {
    errors.name = "Se requiere un Nombre";
  } else if (!input.life) {
    errors.life = "Se requiere cantidad de Vidas";
  } else if (!input.attack) {
    errors.attack = "Se requiere ataque";
  } else if (!input.defense) {
    errors.defense = "Se requiere defense";
  } else if (!input.speed) {
    errors.speed = "Se requiere velocidad";
  } else if (!input.height) {
    errors.height = "Se requiere de un peso";
  } else if (!input.weight) {
    errors.weight = "Se requiere el alto";
  }
 
  return errors;
}
export default function PokemonCreate() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.type); 
 
  const [errors, setErrors] = useState({}); //validaciones

 
  const [input, setInput] = useState({
    name: "", 
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [], //llena este estado el handlechange
  });

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  //guardo lo que escribe el usuario
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, 
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  //select
  function handleSelect(e) {
    if(!input.types.includes(e.target.value)) //no repetir types en el select del create
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }


  //dispatch del post
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(input));
    alert("Pokemon creado.!");
    setInput({
      //seteo en cero
      name: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
 
  }
  //delete
  function handleDelete(el) {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== el), 
    });
  }

return (
  <div>
      <NavBar2 />
      <div className={styles.bkg}>
        <div className={styles.container}>
          <div>
            <h1>Crea tu Pokemon</h1>
            <form
              className={styles.formCreate}
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="name"
                  required
                  pattern="^[a-zA-Z]+$"
                  value={input.name}
                  onChange={(e) => handleChange(e)}
                  style={{ borderRadius: "5px" }}
               
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </div>
              <div>
                <label>Vidas:</label>
                <input
                  type="number"
                  name="life"
                  value={input.life}
                  onChange={(e) => handleChange(e)}
                  style={{ borderRadius: "5px" }}
                />
                {errors.life && <p className={styles.error}>{errors.life}</p>}
              </div>
              <div>
                <label>Ataque:</label>
                <input
                  type="number"
                  name="attack"
                  value={input.attack}
                  onChange={(e) => handleChange(e)}
                  style={{ borderRadius: "5px" }}
                />
                {errors.attack && (<p className={styles.error}>{errors.attack}</p> )}
              </div>
              <div>
                <label>Defensa:</label>
                <input
                  type="number"
                  name="defense"
                  value={input.defense}
                  onChange={(e) => handleChange(e)}
                  style={{ borderRadius: "5px" }}
                />
                {errors.defense && ( <p className={styles.error}>{errors.defense}</p> )}
              </div>
              <div>
                <label>Velocidad:</label>
                <input
                  type="number"
                  name="speed"
                  value={input.speed}
                  onChange={(e) => handleChange(e)}
                  style={{ borderRadius: "5px" }}
                />
                {errors.speed && <p className={styles.error}>{errors.speed}</p>}
              </div>
              <div>
                <label>Peso:</label>
                <input
                  type="number"
                  name="height"
                  value={input.height}
                  onChange={(e) => handleChange(e)}
                  style={{ borderRadius: "5px" }}
                />
                {errors.height && ( <p className={styles.error}>{errors.height}</p>)}
              </div>
              <div>
                <label>Altura:</label>
                <input
                  type="number"
                  name="weight"
                  value={input.weight}
                  onChange={(e) => handleChange(e)}
                  style={{ borderRadius: "5px" }}
                />
                {errors.weight && ( <p className={styles.error}>{errors.weight}</p>)}
              </div>
              <div>
                <label>Imagen:</label>
                <input
                  type="text"
                  name="image"
                  value={input.image}
                  onChange={(e) => handleChange(e)}
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <select
                className={styles.select}
                onChange={(e) => handleSelect(e)}
              >
                {
                types?.map((t, index) => (
                  <option value={t.name} key={index}> {t.name} </option>
                ))
                }
              </select>
              <br />
              <button type="submit" className={styles.correct}>
                Crear
              </button>
            </form>
            {
            input.types.map((el, index) => (
              <div>
                <p className={styles.types} key={index}>{el} </p>
                <button   className={styles.btnx} onClick={() => handleDelete(el)} >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
</div>
  );
            }
          
