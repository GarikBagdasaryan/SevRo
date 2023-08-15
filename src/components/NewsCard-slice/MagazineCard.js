import NewsCard from "../NewsCard/NewsCard";
import "../NewsCard/newscard.scss";
import "./magazinecard.scss";


function NewsSlice() {
	return (
		<div className="News-news-slice">
			<div className="container">
				<div className="News-slice__header-slice">новости</div>
				<div className="News-slice__slider">
					<div className="News-slice__slider__content">
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />

					</div>
				</div>
			</div>
		</div>
	);
}

export default NewsSlice;
