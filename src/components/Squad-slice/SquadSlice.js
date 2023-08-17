import "./squadslice.scss";
import SquadCard from "../SquadCard/SquadCard";
import { Link } from "react-router-dom";

function SquadSlice() {
	const LoadImg = (event) => {
		event.currentTarget.classList.add("squad-card_active");
	};
	const ActionImg = (event) => {
		const cards = document.querySelectorAll(".squad-card");
		for (let i in cards) {
			if (cards[i].classList.contains("squad-card_active")) {
				cards[i].classList.remove("squad-card_active");
				break;
			}
		}
		event.currentTarget.classList.add("squad-card_active");
	};
	return (
		<div className="Squad-slice">
			<div className="container">
				<div className="Squad-slice__content">
					<SquadCard onClick={ActionImg} />
					<SquadCard onClick={ActionImg} />
					<SquadCard onClick={ActionImg} />
					<SquadCard onClick={ActionImg} />
					<SquadCard onClick={ActionImg} />
					<SquadCard onClick={ActionImg} />
					<SquadCard onClick={ActionImg} />
					<SquadCard onLoad={LoadImg} onClick={ActionImg} />
				</div>
			</div>
		</div>
	);
}

export default SquadSlice;
