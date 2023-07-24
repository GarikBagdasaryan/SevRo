import PromoSlice from "./components/Promo-Slice/PromoSlice";
import Footer from "./components/Footer/Footer";
import NewsSlice from "../src/components/News-slice/NewsSlice";

function App() {
	const LoadImg = (event) => {
		event.currentTarget.classList.add("active");
	};
	const ActionImg = (event) => {
		const cards = document.querySelectorAll(
			".Directions-slice__icons__card"
		);
		for (let i in cards) {
			if (cards[i].classList.contains("active")) {
				cards[i].classList.remove("active");
				break;
			}
		}
		event.currentTarget.classList.add("active");
	};

	return (
		<div className="HomePage">
			<PromoSlice />
			<div className="Statistics-slice">
				<div className="container Statistics-slice-container">
					<div className="Statistics-slice__directions">
						<div className="Statistics-slice__directions_text">
							направлений
						</div>
						<div className="Statistics-slice__directions_cout Statistics-slice__title">
							6
						</div>
					</div>
					<div className="Statistics-slice__detachment">
						<div className="Statistics-slice__detachment_text">
							отрядов
						</div>
						<div className="Statistics-slice__detachment_cout Statistics-slice__title">
							20+
						</div>
					</div>
					<div className="Statistics-slice__fighters">
						<div className="Statistics-slice__fighters_text">
							бойцов
						</div>
						<div className="Statistics-slice__fighters_cout Statistics-slice__title">
							1000+
						</div>
					</div>
					<div className="Statistics-slice__years">
						<div className="Statistics-slice__years_text">лет</div>
						<div className="Statistics-slice__years_cout Statistics-slice__title">
							8
						</div>
					</div>
				</div>
			</div>
			<div className="Rso-slice">
				<div className="container Rso-slice-container">
					<div className="Rso-slice__buttons">
						<div className="Rso-slice__button__style">
							<img src="./img/ico-love.png"></img>
							любовь
						</div>
						<div className="Rso-slice__button__style">
							<img src="./img/ico-friend.png"></img>
							друзья
						</div>
						<div className="Rso-slice__button__style">
							<img src="./img/ico-job.png"></img>
							работа
						</div>
					</div>
					<div className="Rso-slice__info">
						<div className="Rso-slice__info__header">о нас</div>
						<div className="Rso-slice__info__title">
							{" "}
							Российские Студенческие Отряды
						</div>
						<div className="Rso-slice__info__description">
							Молодежная общероссийская общественная организация
							«Российские Студенческие Отряды» (РСО) – крупнейшая
							молодежная организация страны, которая обеспечивает
							временной трудовой занятостью более 150 тысяч
							молодых людей из 81 субъекта РФ, а также занимается
							гражданским и патриотическим воспитанием, развивает
							творческий и спортивный потенциал молодежи.
						</div>
						<div className="Rso-slice__info__button">
							<button className="Rso-slice__info__button__stylebtn">
								Подробнее
								<img src="./img/arrow-right.png"></img>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="Video-slice">
				<video loop playsInline controls className="Video-slice__style">
					<source src="video/promo.mp4" type="video/mp4"></source>
				</video>
			</div>
			<div className="Directions-slice">
				<div className="container Directions-slice-container">
					<div className="Directions-slice__info">
						<div className="Directions-slice__info__header">
							направления
						</div>
						<div className="Directions-slice__info__title">
							{" "}
							Студенческие Педагогические Отряды
						</div>
						<div className="Directions-slice__info__description">
							Молодежная общероссийская общественная организация
							«Российские Студенческие Отряды» (РСО) – крупнейшая
							молодежная организация страны, которая обеспечивает
							временной трудовой занятостью более 150 тысяч
							молодых людей из 81 субъекта РФ, а также занимается
							гражданским.
						</div>
						<div className="Directions-slice__info__button">
							<button className="Directions-slice__info__button__stylebtn">
								Перейти
								<img src="./img/arrow-right.png"></img>
							</button>
						</div>
					</div>
					<div className="Directions-slice__icons">
						<div
							className="Directions-slice__icons__card"
							onLoad={LoadImg}
							onClick={ActionImg}
						>
							<img
								className="Directions-slice__icons__card__style"
								src="img/directions2.jpg"
							></img>
							<div className="Directions-slice__icons__card__overlay">
								<img
									className="Directions-slice__icons__card__overlay__style"
									src="img/ico11-spo.svg"
								></img>
							</div>
						</div>
						<div
							className="Directions-slice__icons__card"
							onClick={ActionImg}
						>
							<img
								className="Directions-slice__icons__card__style"
								src="img/directions1.jpg"
							></img>
							<div className="Directions-slice__icons__card__overlay">
								<img
									className="Directions-slice__icons__card__overlay__style"
									src="img/ico08-sso.svg"
								></img>
							</div>
						</div>
						<div
							className="Directions-slice__icons__card"
							onClick={ActionImg}
						>
							<img
								className="Directions-slice__icons__card__style"
								src="img/directions3.jpg"
							></img>
							<div className="Directions-slice__icons__card__overlay">
								<img
									className="Directions-slice__icons__card__overlay__style"
									src="img/ico11-spo.svg"
								></img>
							</div>
						</div>
						<div
							className="Directions-slice__icons__card"
							onClick={ActionImg}
						>
							<img
								className="Directions-slice__icons__card__style"
								src="img/directions4.jpg"
							></img>
							<div className="Directions-slice__icons__card__overlay">
								<img
									className="Directions-slice__icons__card__overlay__style"
									src="img/ico09-sop.svg"
								></img>
							</div>
						</div>
						<div
							className="Directions-slice__icons__card"
							onClick={ActionImg}
						>
							<img
								className="Directions-slice__icons__card__style"
								src="img/directions5.jpg"
							></img>
							<div className="Directions-slice__icons__card__overlay">
								<img
									className="Directions-slice__icons__card__overlay__style"
									src="img/ico11-spo.svg"
								></img>
							</div>
						</div>
						<div
							className="Directions-slice__icons__card"
							onClick={ActionImg}
						>
							<img
								className="Directions-slice__icons__card__style"
								src="img/directions6.jpg"
							></img>
							<div className="Directions-slice__icons__card__overlay">
								<img
									className="Directions-slice__icons__card__overlay__style"
									src="img/ico10-sservo.svg"
								></img>
							</div>
						</div>
					</div>
				</div>
			</div>
			<NewsSlice />
			<Footer />
		</div>
	);
}

export default App;
