import { Link } from "react-router-dom";
import "./squadcard.scss";

function SquadCard(props) {
	return (
		<div className={props.type}>
			<img src="./img/squad_SL.jpg" className="squad-card__img" />
			<div className="squad-card__name">Стальные Львы</div>
			<p className="squad-card__description">У нас крепкие Стальные нервы и большое Львиное сердце!</p>
			<button className="squad-card__button">Перейти</button>
		</div>
	);
}

export default SquadCard;
