import "./cssComponents/card.css"
import user from "../img/user.png"

function Card() {
    return (
        <div className="card">
            <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                    <img src={user} alt="" className="card-img" />
                </div>
            </div>

            <div className="card-content">
                <h2 className="name">Jorge Roberto</h2>
                <p className="description">Jorge Roberto le tiene que dar 500$ a Manuela</p>
            </div>
        </div>
    );
}

export default Card;