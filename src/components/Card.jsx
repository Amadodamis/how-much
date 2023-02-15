import "./cssComponents/card.css"
import user from "../img/user.png"

function Card() {
    return (
        <div class="card">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img src={user} alt="" class="card-img" />
                </div>
            </div>

            <div class="card-content">
                <h2 class="name">Jorge Roberto</h2>
                <p class="description">Jorge Roberto le tiene que dar 500$ a Manuela</p>

                <button class="button">View More</button>
            </div>
        </div>
    );
}

export default Card;