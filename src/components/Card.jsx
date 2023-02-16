import { useEffect, useState } from "react";
import "./cssComponents/card.css"
import user from "../img/user.png"

function Card(props) {
    const { nombreParticipante, pago,numeroParticipantes } = props
    const [texto,setTexto]=useState("")

   useEffect(() => {
        if(numeroParticipantes>1){
            setTexto("y le tiene que dar 400 a Manuela.")
        }
   
   }, [numeroParticipantes])
   

    return (
        <div className="card" >
            <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                    <img src={user} alt="" className="card-img" />
                </div>
            </div>

            <div className="card-content">
                <h2 className="name"> {nombreParticipante} </h2>
                <p className="description">{nombreParticipante} pago {pago}$ {texto} </p>
            </div>
        </div>
    );
}

export default Card;