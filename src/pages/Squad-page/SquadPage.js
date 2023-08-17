import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SquadCard from "../../components/SquadCard/SquadCard";
import "../../components/MasonryGrid/masonry.scss";

function SquadPage() {
	const items = Array.from({ length: 12 }).map(() => <SquadCard></SquadCard>);

	return (
		<div className="SquadPage">
			<div className="container">
				<ResponsiveMasonry columnsCountBreakPoints={{ 425: 2, 600: 3, 1024: 4 }}>
					<Masonry className="Masonry-grid">{items}</Masonry>
				</ResponsiveMasonry>
			</div>
		</div>
	);
}

export default SquadPage;
