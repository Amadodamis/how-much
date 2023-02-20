import { useState, useEffect } from "react";

import "./cssComponents/body.css"
import AgregarParticipanteComponent from "./AgregarParticipante";
import Card from "./Card";
import devolucion from "./JS/functionPago";

function Body() {

    const [participantes, setParticipante] = useState([])
    const [monto, setNuevoMonto] = useState(0)
    const [arrayParticipantes, setArrayParticipantes] = useState([])


    const agregarParticipante = (e) => {
        e.preventDefault();

        if (e.target.nombre.value !== "" & e.target.plata.value !== "") {
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
            console.log("Uno de los 2 datos fue vacio")
        }

    }

    useEffect(() => {
        if (participantes.length > 0) {
            let arrayScope = [...participantes]

            let arrayExtra = devolucion(arrayScope, monto)

            setArrayParticipantes(arrayExtra)
            arrayExtra = null;
            arrayScope = null;
        }

    }, [participantes,monto])



    const mostrarParticipantes = arrayParticipantes.map((participante, j) => {
        return (
            <Card key={j}
                nombreParticipante={participante.nombre}
                pago={participante.monto}
                numeroParticipantes={arrayParticipantes.length}
                tieneQueDarle={participante.tieneQueDarle}
            />
        )
    })


    console.log(participantes)
    return (
        <section className="container-body">
            <div className="body">
                <AgregarParticipanteComponent
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