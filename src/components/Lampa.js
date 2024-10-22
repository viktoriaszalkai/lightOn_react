import { useContext } from "react";
import { KattContext } from "../context/KattContext.js";

export default function Lampa(props) {
  const { katt } = useContext(KattContext);
  function kattintas() {
    console.log(props.index);
    katt(props.index);
  }

  return (
    <div
      className={`lampa ${props.adat ? "fel" : "le"}`}
      onClick={() => kattintas()}
    ></div>
  );
}
