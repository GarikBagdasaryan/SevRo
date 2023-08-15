import Header from "../../components/Header/Header";
import DirectionsSlice from "../../components/Directions-slice/DirectionsSlice";
import NewsSlice from "../../components/MagazineCard-slice/MagazineCard";

function Newspage() {
	return (
		<div className="Newspage">

			<DirectionsSlice />
			<NewsSlice />
		</div>
	);
}

export default Newspage;
