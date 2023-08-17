import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../../index.scss";
import SquadCard from "../SquadCard/SquadCard";

function MasonryGrid() {
	const items = Array.from({ length: 12 }).map((_, index) => <img key={index} src={`https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`} style={{ width: "100%", borderRadius: "8px" }} />);

	return (
		<div className="MasonryItem">
			<ResponsiveMasonry columnsCountBreakPoints={{ 400: 2, 800: 3, 1000: 4 }}>
				<Masonry gutter="20px">{items}</Masonry>
			</ResponsiveMasonry>
		</div>
	);
}

export default MasonryGrid;
