import PromoSlice from "./components/Promo-Slice/PromoSlice";
import Footer from "./components/Footer/Footer";
import NewsSlice from "./components/News-slice/NewsSlice";
import StatisticsSlice from "./components/Statistics-slice/StatisticsSlice";
import RsoSlice from "./components/Rso-slice/RsoSlice";
import VideoSlice from "./components/Video-slice/VideoSlice";
import QuastionSlice from "./components/Quastion-Slice/QuastionSlice";
import FormSlice from "./components/Form-slice/FormSlice";

function App() {
	return (
		<div className="HomePage">
			<PromoSlice />
			<StatisticsSlice />
			<RsoSlice />
			<VideoSlice />
			<QuastionSlice />
			<NewsSlice />
			<FormSlice />
			<Footer />
		</div>
	);
}

export default App;
