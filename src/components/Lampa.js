export default function Lampa(props){

    function katt(){
        console.log(props.index)
        props.katt(props.index)
    }

    return(
        <div className={`lampa ${props.adat?"fel":"le"}`} onClick={()=>katt()}></div>
    )
}