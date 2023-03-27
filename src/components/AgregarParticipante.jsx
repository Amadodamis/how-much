import "./cssComponents/agregarParticipante.css"
import getText from "./JS/textosAgregarParticipante"
import { useEffect, useState } from "react"

function AgregarParticipanteComponent(props) {


    const { agregarParticipante, leng/*,monto*/ } = props

    const [texto, setTexto] = useState(getText(leng))

    useEffect(() => {
        setTexto(getText(leng))
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