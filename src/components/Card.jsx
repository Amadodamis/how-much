import { useEffect, useState } from "react";
import "./cssComponents/card.css"
import user from "../img/user.png"

function Card(props) {
    const { nombreParticipante, pago, numeroParticipantes, tieneQueDarle } = props
    const [texto, setTexto] = useState("")
    console.log(numeroParticipantes)

    useEffect(() => {
        if (numeroParticipantes === 1) {
            setTexto(".")
        }
        if (numeroParticipantes >= 2) {
            if (tieneQueDarle.length===0) {
                setTexto(".")
            } else {


                let texto2 = "y tiene que darle "
                for (let index = 0; index < tieneQueDarle.length; index++) {
                    texto2 = texto2 + tieneQueDarle[index].monto + " a " + tieneQueDarle[index].nombre
                    if ((index + 1) < tieneQueDarle.length) {
                        texto2 = texto2 + " tambien le tiene que dar "
                    } else {
                        texto2 = texto2 + "."
                    }
                }
                setTexto(texto2)
            }
        }

    }, [numeroParticipantes,tieneQueDarle])


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
                <p className="description">{nombreParticipante} pagó {pago}$ {texto} </p>
            </div>
        </div>
    );
}

export default Card;