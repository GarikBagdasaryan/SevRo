import Header from "../../components/Header/Header";
import NewsSlice from "../Magazine-page/MagazineCard-slice/MagazineCard";

function Newspage() {
	return (
		<div className="Newspage">
			<Header NavDark="test" />
			<NewsSlice />
		</div>
	);
}

export default Newspage;
