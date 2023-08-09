import '../Header/header.scss';
function Header() {

    const ActionMenu = event => {
        const logo = document.querySelectorAll('.Header-slice__burger__button')
        event.currentTarget.classList.toggle('active-menu');





    };
    return (

        <header className="Header-slice">
            <div className="Header-slice__sticky">
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
                <div className='Header-slice__burger'  >
                    <svg width="50" height="36" viewBox="0 0 50 36" fill="none" className='Header-slice__burger__button' onClick={ActionMenu}  >
                        <rect id="bar1" width="50" height="4" rx="2" fill="#F7F7F7" />
                        <rect id="bar2" y="16" width="50" height="4" rx="2" fill="#F7F7F7" />
                        <rect id="bar3" y="32" width="50" height="4" rx="2" fill="#F7F7F7" />
                    </svg>
                    <div className="Header-slice__burger-modal ">
                        <svg viewBox="0 0 360 522" fill="none">
                            <path d="M0 41.802C0 41.802 21.9968 -6.5296 96.9857 0.746126C171.975 8.02185 190.972 111.961 277.959 79.22C364.946 46.4793 359.947 41.802 359.947 41.802V522H0V41.802Z" fill="#0096C8" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;