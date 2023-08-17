import '../Directions-slice/directions.scss';
import DirectionCard from '../DirectionCard/DirectionCard';
import '../DirectionCard/DirectionCard.scss';

function DirectionsSlice() {

    return (

        <div className="Directions-slice">
            <div className="container Directions-slice-container">
                <div className="Directions-slice__info">
                    <div className="Directions-slice__info__header">направления</div>
                    <div className="Directions-slice__info__title"> Студенческие Педагогические Отряды</div>
                    <div className="Directions-slice__info__description">Молодежная общероссийская общественная организация «Российские Студенческие Отряды» (РСО) – крупнейшая молодежная организация страны, которая обеспечивает временной трудовой занятостью более 150 тысяч молодых людей из 81 субъекта РФ, а также занимается гражданским.</div>
                    <div className="Directions-slice__info__button">
                        <button className="Directions-slice__info__button__stylebtn">
                            Перейти
                            <img src="./img/arrow-right.png" />
                        </button>
                    </div>
                </div>
                <div className="Directions-slice__icons">
                    <DirectionCard />
                    <DirectionCard />
                    <DirectionCard />
                    <DirectionCard />
                    <DirectionCard />
                    <DirectionCard />
                    <DirectionCard />
                </div>
            </div>
        </div>
    );
}

export default DirectionsSlice;