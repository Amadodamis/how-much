import { useState, useEffect } from "react";

import "./cssComponents/body.css"
import AgregarParticipanteComponent from "./AgregarParticipante";
import Card from "./Card";
import devolucion from "./JS/logicaDeArrays";

function Body() {

    const [participantes, setParticipante] = useState([])
    const [monto, setNuevoMonto] = useState(0)
    const [arrayParticipantes,setArrayParticipantes]=useState([])

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
        if(participantes.length>1){
            let arrayExtra=devolucion(participantes,monto)
            
        }
   }, [participantes])



    const mostrarParticipantes = participantes.map((participante, i) => {
        return (
            <Card key={i}
                nombreParticipante={participante.nombre}
                pago={participante.monto}
                numeroParticipantes={participantes.length}
            />
        )
    })

    console.log(participantes)
    return (
        <section className="body">
            <AgregarParticipanteComponent
                agregarParticipante={agregarParticipante}
            />

            <div className="row2">

                {participantes.length > 0 && mostrarParticipantes}

            </div>
        </section>
    );
}

export default Body;