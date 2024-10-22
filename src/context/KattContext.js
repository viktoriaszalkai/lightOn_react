import { createContext, useState } from "react";


export const KattContext = createContext(""); //contecx létrehozása

export const KattProvider = ({ children }) => {
  function listaFeltolt() {
    const LISTA = [false, true, false, false, true, false, true, false, true];
    for (let index = 0; index < LISTA.length; index++) {
      let szam = Math.random();
      if (szam < 0.4) {
        LISTA[index] = true;
      } else {
        LISTA[index] = false;
      }
    }
    return LISTA;
  }

  const [lista, setLista] = useState(listaFeltolt());

  function katt(adat) {
    const slista = [...lista];
    slista[adat] = !slista[adat];
    setLista([...slista]);
    console.log("app:katt");
  }
  return (
    <KattContext.Provider value={{ lista, katt }}>
      {" "}
      {/* itt kötjük össze a contextet a providerrel */}
      {children} {/* a children helyére fog kerülni a körbeölelt komponens */}
    </KattContext.Provider>
  );
};
