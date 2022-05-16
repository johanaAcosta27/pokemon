import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/home/Home';
import PokemonCreate from './components/pokemonCreate/PokemonCreate';
import Detail from './components/detail/Detail';


function App() {
return(
  <BrowserRouter>
    <div className="App">
     <Routes>
       <Route exact path="/" element={<LandingPage />} />
       <Route  path="/home" element={<Home />} />
       <Route exact path="/pokemon" element={<PokemonCreate/>} /> 
      <Route exact path="/pokemon/:id" element={<Detail/>} /> 
   </Routes> 
  </div>
</BrowserRouter>
   )
}
export default App;
