import "./cssComponents/agregarParticipante.css"

function AgregarParticipante() {



    return (
        <div className="row1">
            <h2>Agregar Participante</h2>

            <form className="container-inputs-buttons">
                <input placeholder="Nombre" type="text" name="text" class="input" />
                <input placeholder="Cuanto gastó?" type="text" name="text" class="input" />
                <input placeholder="Que Trajo?" type="text" name="text" class="input" />
                <button>Agregar</button>
            </form>

        </div>
    );
}

export default AgregarParticipante;