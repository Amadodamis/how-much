import "./cssComponents/header.css"
import { useEffect,useState } from "react"


function Header(props) {
    const { leng } = props
    
    const [texto,setTexto]=useState("¿Quién le tiene que dar dinero a quién?")


    useEffect(() => {
        if(leng==="ENG"){
            setTexto("Who has to give money to whom?")
        }else{
            setTexto("¿Quién le tiene que dar dinero a quién?")
        }

    }, [leng])

    return (
        <div className="header">
            <h2 className="title">{texto} </h2>
        </div>
    );
}

export default Header;