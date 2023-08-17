import '../DirectionCard/DirectionCard.scss';

function DirectionCard() {

    const ActionImg = event => {

        event.currentTarget.classList.toggle('active');
    };

    return (

        <div className="DirectionCard" onClick={ActionImg}>
            <img className="DirectionCard__style" src="img/directions2.jpg"></img>
            <div className="DirectionCard__overlay">
                <img className="DirectionCard__overlay__style" src="img/ico11-spo.svg"></img>
            </div>
        </div>
    );
}

export default DirectionCard;