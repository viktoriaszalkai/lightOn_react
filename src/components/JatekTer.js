import Lampa from "./Lampa.js";

export default function Jatekter(props) {
  return (
    <div className="Jatekter">
        {props.lista.map((elem, index) => {
          return <Lampa adat={elem} key={index} index={index} />;
        })}
    </div>
  );
}
