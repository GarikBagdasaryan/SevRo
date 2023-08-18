import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SquadCard from "../../components/SquadCard/SquadCard";
import "../../components/MasonryGrid/masonry.scss";
import { useState } from "react";

function SquadPage(props) {
	const items = [];
	const [activeCard, setActiveCard] = useState(items[2]);

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
