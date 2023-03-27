import "./cssComponents/header.css"
import { useEffect, useState } from "react"
import getTextHeader from "./JS/textoHeader"

function Header(props) {
    const { leng } = props

    const [texto, setTexto] = useState(getTextHeader(leng))


    useEffect(() => {
       setTexto(getTextHeader(leng))
    }, [leng])

    return (
        <div className="header">
            <h2 className="title">{texto} </h2>
        </div>
    );
}

export default Header;