import '../AlbumCard/AlbumCard.scss';

function AlbumCard() {

    var styles = {
        Grid: {

        }
    };

    return (
        <div className="AlbumCard" style={styles.Grid}>
            <img src="./img/people__card.png" className="AlbumCard__photo"></img>
            <div className="AlbumCard__title">
                Закрытие ТТС 2023
            </div>
        </div>

    );
}

export default AlbumCard;