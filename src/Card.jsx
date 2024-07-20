import profilePicture from './assets/profile_picture.png'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePicture} alt="Profile Picture" />
            <h2 className="card-title">BurN JoE</h2>
            <p className="card-text">I study computer science and love programming</p>
        </div>
    );
}

export default Card