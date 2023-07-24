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
                    <div className="Directions-slice__icons__card" onLoad={LoadImg} onClick={ActionImg}>
                        <img className="Directions-slice__icons__card__style" src="img/directions2.jpg"></img>
                        <div className="Directions-slice__icons__card__overlay">
                            <img className="Directions-slice__icons__card__overlay__style" src="img/ico11-spo.svg"></img>
                        </div>
                    </div>
                    <div className="Directions-slice__icons__card" onClick={ActionImg}>
                        <img className="Directions-slice__icons__card__style" src="img/directions1.jpg" ></img>
                        <div className="Directions-slice__icons__card__overlay">
                            <img className="Directions-slice__icons__card__overlay__style" src="img/ico08-sso.svg"></img>
                        </div>
                    </div>
                    <div className="Directions-slice__icons__card" onClick={ActionImg}>
                        <img className="Directions-slice__icons__card__style" src="img/directions3.jpg"></img>
                        <div className="Directions-slice__icons__card__overlay">
                            <img className="Directions-slice__icons__card__overlay__style" src="img/ico11-spo.svg"></img>
                        </div>
                    </div>
                    <div className="Directions-slice__icons__card" onClick={ActionImg}>
                        <img className="Directions-slice__icons__card__style" src="img/directions4.jpg" ></img>
                        <div className="Directions-slice__icons__card__overlay">
                            <img className="Directions-slice__icons__card__overlay__style" src="img/ico09-sop.svg"></img>
                        </div>
                    </div>
                    <div className="Directions-slice__icons__card" onClick={ActionImg}>
                        <img className="Directions-slice__icons__card__style" src="img/directions5.jpg" ></img>
                        <div className="Directions-slice__icons__card__overlay">
                            <img className="Directions-slice__icons__card__overlay__style" src="img/ico11-spo.svg"></img>
                        </div>
                    </div>
                    <div className="Directions-slice__icons__card" onClick={ActionImg}>
                        <img className="Directions-slice__icons__card__style" src="img/directions6.jpg" ></img>
                        <div className="Directions-slice__icons__card__overlay">
                            <img className="Directions-slice__icons__card__overlay__style" src="img/ico10-sservo.svg"></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DirectionsSlice;