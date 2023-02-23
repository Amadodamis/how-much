import { useEffect, useState } from "react";
import "./cssComponents/card.css"
import user from "../img/user.png"


function Card(props) {
    const { nombreParticipante, pago, numeroParticipantes, tieneQueDarle, leng } = props


    const [texto, setTexto] = useState("")



    //Texto default para el primer participante.
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
            } else {

                if (leng === "ESP") {


                    let texto2 = "y tiene que darle "

                    for (let index = 0; index < tieneQueDarle.length; index++) {

                        texto2 = texto2 + tieneQueDarle[index].monto + " a " + tieneQueDarle[index].nombre

                        if ((index + 1) < tieneQueDarle.length) {
                            texto2 = texto2 + " tambien le tiene que dar "
                        }
                        else {
                            texto2 = texto2 + "."
                        }

                    }
                    setTexto(texto2)
                } else {


                    let texto2 = "and he/she has to give "

                    for (let index = 0; index < tieneQueDarle.length; index++) {

                        texto2 = texto2 + tieneQueDarle[index].monto + "$ " + " to " + tieneQueDarle[index].nombre;

                        if ((index + 1) < tieneQueDarle.length) {
                            texto2 = texto2 + " he/she also has to give "
                        }
                        else {
                            texto2 = texto2 + "."
                        }

                    }

                    setTexto(texto2)


                }



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