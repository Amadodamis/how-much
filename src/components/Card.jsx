import { useEffect, useState } from "react";
import "./cssComponents/card.css"
import user from "../img/user.png"
import textsFunction from "./JS/cardTextsFunction";

function Card(props) {
    const { nombreParticipante, pago, numeroParticipantes, tieneQueDarle, leng } = props
    const [texto, setTexto] = useState("")
    const [text2, setTexto2] = useState(nombreParticipante + " pagó " + pago + "$")

    useEffect(() => {
        leng === "ENG" ? setTexto2(nombreParticipante + " paid " + pago + "$") : setTexto2(nombreParticipante + " pagó " + pago + "$")
    }, [leng, nombreParticipante, pago])

    useEffect(() => {
        if (numeroParticipantes === 1) {
            setTexto(".")
        }
        if (numeroParticipantes >= 2) {
            if (tieneQueDarle.length === 0) {
                setTexto(".")
            }
            else {
                setTexto(textsFunction(leng, tieneQueDarle))
            }
        }

    }, [numeroParticipantes, tieneQueDarle, leng])


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
                <p className="description">{text2} {texto} </p>
            </div>
        </div>
    );
}

export default Card;