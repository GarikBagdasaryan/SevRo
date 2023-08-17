import "../AlbumCard/AlbumCard.scss";
import { Link } from "react-router-dom";

function AlbumCard() {
    return (
        <Link to="/photopage" className="AlbumCard">
            <img src="./img/people__card.png" className="AlbumCard__photo"></img>
            <div className="AlbumCard__title">Закрытие ТТС 2023</div>
        </Link>
    );
}

export default AlbumCard;
