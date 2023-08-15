import PromoSlice from "../../components/Promo-Slice/PromoSlice";
import NewsSlice from "../../components/NewsSlider/NewsSlider";
import StatisticsSlice from "../../components/Statistics-slice/StatisticsSlice";
import RsoSlice from "../../components/Rso-slice/RsoSlice";
import VideoSlice from "../../components/Video-slice/VideoSlice";
import QuestionSlice from "../../components/Question-Slice/QuestionSlice";
import FormSlice from "../../components/Form-slice/FormSlice";
import Header from "../../components/Header/Header";

function Homepage() {
	return (
		<div className="HomePage">
			<Header />
			<PromoSlice />
			<StatisticsSlice />
			<RsoSlice />
			<VideoSlice />
			<QuestionSlice />
			<NewsSlice />
			<FormSlice />
		</div>
	);
}

export default Homepage;
