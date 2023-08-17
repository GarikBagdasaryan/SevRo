import '../PeopleCard/PeopleCard.scss';


function PeopleCard() {

    return (
        <div className="PeopleCard">
            <div className="PeopleCard__photo">
                <img src="./img/people__card.png" />
            </div>
            <div className="PeopleCard__name"> Кондратьев Денис Игоревич</div>
            <div className="PeopleCard__position">
                <p>Председатель правления СевРО МООО "РСО"</p>
            </div>
            <div className='PeopleCard__contact'>
                <div className="PeopleCard__contact__number">
                    +7 978 555 69 96
                </div>
                <div className="PeopleCard__contact__email">
                    dkb@mail.ru
                </div>
            </div>
        </div>
    );
}

export default PeopleCard;