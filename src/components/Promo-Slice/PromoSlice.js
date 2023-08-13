import Header from "../Header/Header";
import "../Promo-Slice/promo.scss";

function PromoSlice() {
	return (
		<div className="Promo-slice">
			<Header NavColor="Header-slice_light" />
			<div className="container ">
				<div className="Promo-slice__info ">
					Найди работу в студенческих отрядах
				</div>
				<div className="Promo-slice__button">
					<button className="Promo-slice__button__stylebtn">
						Вступить
						<img src="./img/arrow-right.png"></img>
					</button>
				</div>
			</div>
		</div>
	);
}

export default PromoSlice;
