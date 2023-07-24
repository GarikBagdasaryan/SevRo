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
                    <li><a href="">деятельность</a></li>
                    <li><a href="">новости</a></li>
                    <li><a href="">галерея</a></li>
                    <li><a href="">другое</a></li>
                </ul>
            </div>
            <div className="Header-slice__headerButton">
                <button className="Header-slice__headerButton__button">Вступить</button>
            </div>
        </header>
    );
}

export default Header;