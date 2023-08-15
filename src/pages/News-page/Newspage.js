import DirectionsSlice from "../../components/Directions-slice/DirectionsSlice";
import NewsSlice from "../../components/News-slice/NewsSlice";
import "./newspage.scss";

function Newspage() {
	return (
		<div className="Newspage">
			<DirectionsSlice />
			<NewsSlice />
		</div>
	);
}

export default Newspage;
