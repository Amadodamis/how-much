import "./cssComponents/agregarParticipante.css"

function AgregarParticipanteComponent(props) {
    
    const { agregarParticipante } = props


    return (
        <div className="row1">
            <h2 className="h2-agregar">AGREGAR PARTICIPANTE</h2>
            <form className="container-inputs-buttons" onSubmit={agregarParticipante}>

                <input placeholder="Nombre" type="text" name="nombre" className="input" />
                <input placeholder="Cuánto gastó?" type="number" name="plata" className="input" />
                <button type="submit" >Agregar</button>
                
            </form>

        </div>
    );
}

export default AgregarParticipanteComponent;