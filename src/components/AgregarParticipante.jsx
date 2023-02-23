import "./cssComponents/agregarParticipante.css"
import { useEffect, useState } from "react"

function AgregarParticipanteComponent(props) {


    const { agregarParticipante, leng/*,monto*/ } = props

    const [texto, setTexto] = useState({
        title: "AGREGAR PARTICIPANTE",
        button: "Agregar",
        placeholderUno: "Nombre",
        placeholderDos: "Cuánto gastó?"

    })

    useEffect(() => {
        if (leng === "ENG") {
            setTexto({
                title: "ADD PARTICIPANT",
                button: "ADD",
                placeholderUno: "Name",
                placeholderDos: "How much did he/she spend?"
            })
        } else {
            setTexto({
                title: "AGREGAR PARTICIPANTE",
                button: "Agregar",
                placeholderUno: "Nombre",
                placeholderDos: "Cuánto gastó?"
            })
        }

    }, [leng])


    return (
        <div className="row1">
            <h2 className="h2-agregar">{texto.title} </h2>
            <form className="container-inputs-buttons" onSubmit={agregarParticipante}>

                <input placeholder={texto.placeholderUno} type="text" name="nombre" className="input" />
                <input placeholder={texto.placeholderDos} type="number" name="plata" className="input" />
                <button type="submit" >{texto.button}</button>

            </form>

        </div>
    );
}

export default AgregarParticipanteComponent;