import '../Header/header.scss';
function Header() {
    return (

        <header className="Header-slice">
            <div className="Header-slice__headerLogo">
                <img width={50} height={50} src="img/logo-rso.png"></img>
                <img width={50} height={50} src="img/logo-sevro.png"></img>
            </div>
            <div className="Header-slice__headerLinks">
                <ul>
                    <li><a href="">о нас</a></li>
                    <li><a href="">новости</a></li>
                    <li><a href="">галерея</a></li>
                    <li><a href="">бойцам</a></li>
                    <li><a href="">контакты</a></li>
                    <li><a href="">сотрудничество</a></li>
                    <li><a href="">Q&A</a></li>
                </ul>
            </div>
            <div className="Header-slice__headerButton">
                <button className="Header-slice__headerButton__button">Вступить</button>
            </div>
        </header>
    );
}

export default Header;