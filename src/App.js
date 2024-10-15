import { LISTA } from "./Adat.js";
import logo from './logo.svg';
import './App.css';
import Jatekter from "./components/JatekTer.js";
import {useState} from 'react';

function App() {

  function listaFeltolt(){
    const LISTA=[false,true,false,false,true,false,true,false,true];
    for (let index = 0; index <LISTA.length; index++) {
      let szam = Math.random();
      if (szam < 0.4) {
        LISTA[index] = true;
      } else {
        LISTA[index] = false;
      }
      
    }
    return LISTA;
  }
  
  const [lista, setLista]=useState(listaFeltolt());
  
    function katt(adat){
      const slista=[...lista];
      slista[adat]=!slista[adat]
      setLista([...slista]);
      console.log("app:katt")
    }
  return (
    <div className="App">
      <header className="App-header">
        <Jatekter lista={lista} katt={katt}/>
      </header>
    </div>
  );
}

export default App;
