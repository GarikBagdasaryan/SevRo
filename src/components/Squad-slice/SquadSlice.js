import "./squadslice.scss";
import SquadCard from "../SquadCard/SquadCard";


function SquadSlice() {

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
