import { useState, useEffect } from "react";

import "./cssComponents/body.css"
import AgregarParticipanteComponent from "./AgregarParticipante";
import Card from "./Card";

function Body() {

    const [participantes, setParticipante] = useState([])
    const [monto, setNuevoMonto] = useState(0)

    const agregarParticipante = (e) => {
        e.preventDefault();
        if (e.target.nombre.value != "" & e.target.plata.value != "") {
            console.log("no dio vacio")
            let nuevoParticipante = e.target.nombre.value;
            let nuevoMonto = parseInt(e.target.plata.value)
            setParticipante([...participantes, nuevoParticipante])
            setNuevoMonto(monto + nuevoMonto)
            e.target.nombre.value = ""
            e.target.plata.value = ""
        }else{
            console.log("dio vacio")
        }


    }

    /*

    useEffect(() => {
        console.log("Se monto el componente")

    }, [participantes])
*/

    return (
        <section className="body">
            <AgregarParticipanteComponent
                agregarParticipante={agregarParticipante}
            />

            <div className="row2">
                {participantes !== [] &
                    <Card />

                }

            </div>
        </section>
    );
}

export default Body;