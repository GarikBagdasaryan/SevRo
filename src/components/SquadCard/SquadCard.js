import { Link } from "react-router-dom";
import "./squadcard.scss";

function SquadCard() {
	return (
		<div className="squad-card">
			<img src="./img/squad_SL.jpg" className="squad-card__img" />
			<div className="squad-card__name">Стальные Львы</div>
			<button className="squad-card__button">Перейти</button>
		</div>
	);
}

export default SquadCard;
