
export const initialState = {
    pokemon: [],
    allPokemon : [],
    type: [],
    details: [],
  }
   
export default function rootReducer (state=initialState, action) {
    switch(action.type) {
        case 'GET_POKEMON':
            return {
                ...state,
                pokemon: action.payload, 
                allPokemon: action.payload  //FILTROS
            } 
        case 'GET_NAME_POKEMON':  //searchbar
           return{
             ...state,
             pokemon: action.payload   
           }
        case 'GET_TYPE' : //nuevo []
          return {
            ...state,
            type: action.payload
          }
          case 'GET_BY_ID': //get id details
            return{
                ...state,
                details: action.payload
            }
        case 'POST_POKEMON' : //post
           return {
             ...state,
           }
        case "PUT_POKEMON": //actualizar
           return{
               ...state,
               details: action.payload   
             }
        case 'FILTER_CREATED' : //filter creados o api
        const allPoke = state.allPokemon;
        const createdFilter = action.payload === "Creados"
          ? allPoke.filter((e) => e.createdInDb)
          : allPoke.filter((e) => !e.createdInDb);
        return {
        ...state,
        pokemon: action.payload === "Todos" ? state.allPokemon : createdFilter,
        };
        
       case 'FILTER_TYPE' :
        const allPokemons = state.allPokemon;
        const typeFiltered = action.payload === "type"
            ? allPokemons
            : allPokemons.filter((e) => e.types.includes(action.payload));
        return {
          ...state,
          pokemon: typeFiltered,
        };

     case 'SORT_NAME' :
      let order = action.payload === 'asc' ? 
            state.allPokemon.sort(function(a,b) {
                
                if(a.name > b.name) {
        
                    return 1
                }
                if( b.name > a.name){
                    return -1
                }
                return 0 
            }) : 
            state.allPokemon.sort(function(a,b) {
                if(a.name > b.name) {
                    return -1
                }
                if( b.name > a.name){
                    return 1
                }
                return 0
            })
            return{
                ...state ,
                pokemon : order

        }
     case "FILTER_BY_ATTACK":
        console.log(state.allPokemon)
        let orderFilter = action.payload === 'menor' ? 
        state.allPokemon.sort(function(a,b) {
            
            if(a.attack > b.attack) {
    
                return 1
            }
            if( b.attack > a.attack){
                return -1
            }
            return 0
        }) : 
        state.allPokemon.sort(function(a,b) {
            if(a.attack > b.attack) {
                return -1
            }
            if( b.attack > a.attack){
                return 1
            }
            return 0
        })
        return{
            ...state,
            pokemon : orderFilter

    }
         default: 
           return state;    
     }
    }


