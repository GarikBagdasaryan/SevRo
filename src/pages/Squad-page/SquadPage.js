import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SquadCard from "../../components/SquadCard/SquadCard";
import "../../components/MasonryGrid/masonry.scss";
import { useState } from "react";

function SquadPage(props) {
	const items = [0, 1, 2, 3, 4, 5, 6];
	const [activeCard, setActiveCard] = useState();

	return (
		<div className="SquadPage">
			<div className="container">
				<ResponsiveMasonry columnsCountBreakPoints={{ 425: 2, 600: 3, 1024: 4 }}>
					<Masonry className="Masonry-grid">
						{items.map((value) => {
							return (
								<div onClick={() => setActiveCard(value)}>
									<SquadCard key={value} type={activeCard === value ? "squad-card squad-card_active" : "squad-card"}></SquadCard>
								</div>
							);
						})}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</div>
	);
}

export default SquadPage;
