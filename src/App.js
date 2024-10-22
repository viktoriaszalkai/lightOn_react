import { LISTA } from "./Adat.js";
import logo from './logo.svg';
import './App.css';
import Jatekter from "./components/JatekTer.js";
import {useContext, useState} from 'react';
import { KattContext } from "./context/KattContext.js";

function App() {
  const {lista} = useContext(KattContext);

  return (
    <div className="App">
      <header className="App-header">
        <Jatekter lista={lista}/>
      </header>
    </div>
  );
}

export default App;
