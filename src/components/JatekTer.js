
import Lampa from "./Lampa.js";


export default function Jatekter(props){

    function katt(adat){
        props.katt(adat);
        console.log("jatekter:katt")
    }

    return(
        <div className="Jatekter">
            <>
            {
                props.lista.map((elem,index)=>{
                    return (<Lampa adat = {elem} key={index} index={index} katt={katt}/>)
                })
            }
            </>
        </div>
    )
}