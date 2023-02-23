import { useState, useEffect } from "react";

import "./cssComponents/body.css"
import AgregarParticipanteComponent from "./AgregarParticipante";
import Card from "./Card";
import devolucion from "./JS/functionPago";
import SwitchLeng from "./SwitchLeng";
import { textsAlertsBody, alerts } from "./JS/textsBody.js";


function Body(props) {
    const { leng, toggleLeng } = props
    const [participantes, setParticipante] = useState([])
    const [monto, setNuevoMonto] = useState(0)
    const [arrayParticipantes, setArrayParticipantes] = useState([])


    //Textos ENG/SPA BODY
    const [texto, setTexto] = useState(textsAlertsBody(leng))

    useEffect(() => {
        setTexto(textsAlertsBody(leng))

    }, [leng])



    const agregarParticipante = (e) => {
        e.preventDefault();

        if (e.target.nombre.value !== "" && e.target.plata.value !== "" && e.target.plata.value >= 0) {
            let nombreNuevoParticipante = e.target.nombre.value;
            let nuevoMonto = parseInt(e.target.plata.value)
            let nuevoParticipante = {
                nombre: nombreNuevoParticipante,
                monto: nuevoMonto,
                tieneQueDarle: []
            }

            setParticipante([...participantes, nuevoParticipante])
            setNuevoMonto(monto + nuevoMonto)
            e.target.nombre.value = ""
            e.target.plata.value = ""


        } else {
            //Si uno de los datos ingresados en el input es vacio o valor invalido, genera un alert.
            alerts(e.target.nombre.value, e.target.plata.value, texto.errorNombre, texto.errorMonto, texto.errorMontoDos)
            
        }

    }



    //Factorizacion del array
    useEffect(() => {
        if (participantes.length > 0) {
            let arrayScope = [...participantes]

            let arrayExtra = devolucion(arrayScope, monto)

            setArrayParticipantes(arrayExtra)
            arrayExtra = null;
            arrayScope = null;
        }

    }, [participantes, monto])


    //Rendereizacion del array
    const mostrarParticipantes = arrayParticipantes.map((participante, j) => {
        return (
            <Card key={j}
                nombreParticipante={participante.nombre}
                pago={participante.monto}
                numeroParticipantes={arrayParticipantes.length}
                tieneQueDarle={participante.tieneQueDarle}
                leng={leng}
            />
        )
    })



    return (
        <section className="container-body">
            <div className="body">
                <SwitchLeng leng={leng} toggleLeng={toggleLeng} />

                <AgregarParticipanteComponent
                    leng={leng}
                    agregarParticipante={agregarParticipante}
                //monto={monto}
                />

                <div className="row2">


                    {arrayParticipantes.length >= 1 && mostrarParticipantes}

                </div>
            </div>
        </section>
    );
}

export default Body;