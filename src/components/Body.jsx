import { useState, useEffect } from "react";

import "./cssComponents/body.css"
import AgregarParticipanteComponent from "./AgregarParticipante";
import Card from "./Card";
import devolucion from "./JS/logicaDeArrays";

function Body() {

    const [participantes, setParticipante] = useState([])
    const [monto, setNuevoMonto] = useState(0)
    const [arrayParticipantes, setArrayParticipantes] = useState([])

    const agregarParticipante = (e) => {
        e.preventDefault();
        if (e.target.nombre.value != "" & e.target.plata.value != "") {
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
        if (participantes.length > 1) {
            let arrayScope = [...participantes]
            let arrayExtra = devolucion(arrayScope, monto)

            setArrayParticipantes(arrayExtra)
            arrayExtra = null;
            arrayScope = null;
        }
    }, [participantes])

    

    const mostrarParticipante = participantes.map((participante, i) => {
        return (
            <Card key={i}
                montoTotal={monto}
                nombreParticipante={participante.nombre}
                pago={participante.monto}
                tieneQueDarle={participante.tieneQueDarle}
                numeroParticipantes={participantes.length}
            />
        )
    })

    const mostrarParticipantes = arrayParticipantes.map((participante, j) => {
        return (
            <Card key={j}
                montoTotal={monto}
                nombreParticipante={participante.nombre}
                pago={participante.monto}
                tieneQueDarle={participante.tieneQueDarle}
                numeroParticipantes={arrayParticipantes.length}
            />
        )
    })

    return (
        <section className="body">
            <AgregarParticipanteComponent
                agregarParticipante={agregarParticipante}
            />

            <div className="row2">

                {participantes.length >= 0  && participantes.length <2 && mostrarParticipante}

                {arrayParticipantes.length >= 2 && mostrarParticipantes}

            </div>
        </section>
    );
}

export default Body;