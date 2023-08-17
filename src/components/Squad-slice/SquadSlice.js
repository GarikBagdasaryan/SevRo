import "./squadslice.scss";
import SquadCard from "../SquadCard/SquadCard";


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
					<SquadCard />
					<SquadCard />
					<SquadCard />
					<SquadCard />
					<SquadCard />
					<SquadCard />
					<SquadCard />
					<SquadCard />
				</div>
			</div>
		</div>
	);
}

export default SquadSlice;
