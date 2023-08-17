import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../../index.scss";
import SquadCard from "../SquadCard/SquadCard";

function MasonryGrid() {
	const items = Array.from({ length: 12 }).map((_, index) => <SquadCard />);

	return (
		<div className="MasonryItem">
			<ResponsiveMasonry columnsCountBreakPoints={{ 400: 2, 800: 3, 1000: 4 }}>
				<Masonry gutter="20px">{items}</Masonry>
			</ResponsiveMasonry>
		</div>
	);
}

export default MasonryGrid;
