import "./cssComponents/body.css"
import AgregarParticipante from "./AgregarParticipante";
import Card from "./Card";

function Body() {
    return (
        <section className="body">
            <AgregarParticipante/>

            <div className="row2">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    );
}

export default Body;