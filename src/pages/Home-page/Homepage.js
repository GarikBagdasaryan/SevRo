import PromoSlice from "../../components/Promo-Slice/PromoSlice";
import NewsSliderSlice from "../../components/NewsSlider-slice/NewsSlider";
import StatisticsSlice from "../../components/Statistics-slice/StatisticsSlice";
import RsoSlice from "../../components/Rso-slice/RsoSlice";
import VideoSlice from "../../components/Video-slice/VideoSlice";
import QuestionSlice from "../../components/Question-Slice/QuestionSlice";
import FormSlice from "../../components/Form-slice/FormSlice";


function Homepage() {
	return (
		<div className="HomePage">
			<PromoSlice />
			<StatisticsSlice />
			<RsoSlice />
			<VideoSlice />
			<QuestionSlice />
			<NewsSliderSlice />
			<FormSlice />
		</div>
	);
}

export default Homepage;
