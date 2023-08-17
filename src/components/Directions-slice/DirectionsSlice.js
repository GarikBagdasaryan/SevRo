import '../Directions-slice/direction.scss';
import DirectionCard from '../DirectionCard/DirectionCard';

function DirectionsSlice() {
    const LoadImg = event => {
        event.currentTarget.classList.add('active');

    };
    const ActionImg = event => {
        const cards = document.querySelectorAll('.Directions-slice__icons__card')
        for (let i in cards) {
            if (cards[i].classList.contains('active')) { cards[i].classList.remove('active'); break; }
        }
        event.currentTarget.classList.add('active');
    };
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
                            <img src="./img/arrow-right.png"></img>
                        </button>
                    </div>
                </div>
                <div className="Directions-slice__icons">
            <DirectionCard onLoad={LoadImg} onClick={ActionImg}/>
            <DirectionCard onClick={ActionImg} />
            <DirectionCard onClick={ActionImg}/>
            <DirectionCard onClick={ActionImg}/>
            <DirectionCard onClick={ActionImg}/>
            <DirectionCard onClick={ActionImg}/>
            <DirectionCard onClick={ActionImg}/>
                </div>
            </div>
        </div>
    );
}

export default DirectionsSlice;