function App() {
  return (
    <div className="HomePage">
      <div className="Promo-slice">
        <div className="container">
          <header>
            <div className="Promo-slice__headerLogo">
              <img width={40} height={40} src="img/logo-rso.png"></img>
              <img width={40} height={40} src="img/logo-sevro.png"></img>
            </div>
            <div className="Promo-slice__headerLinks">
              <ul>
                <li><a href="">О нас</a></li>
                <li><a href="">Деятельность</a></li>
                <li><a href="">Новости</a></li>
                <li><a href="">Галерея</a></li>
                <li><a href="">Другое</a></li>
              </ul>
            </div>
            <div className="Promo-slice__headerButton">
              <button className="Promo-slice__headerButton__button"><span>Вступить</span></button>
            </div>
          </header>
          <div className="Promo-slice__info">
            Найди работу в студенческих отрядах
          </div>
          <div className="Promo-slice__button">
            <button className="Promo-slice__button__stylebtn"><span>Вступить</span></button>
          </div>
        </div>
      </div>

      <div className="Statistics-slice">
        <div className="container Statistics-slice-container">
          <div className="Statistics-slice__directions">
            <div className="Statistics-slice__directions_text">направлений</div>
            <div className="Statistics-slice__directions_cout">6</div>
          </div>
          <div className="Statistics-slice__detachment">
            <div className="Statistics-slice__detachment_text">отрядов</div>
            <div className="Statistics-slice__detachment_cout">20+</div>
          </div>
          <div className="Statistics-slice__fighters">
            <div className="Statistics-slice__fighters_text">бойцов</div>
            <div className="Statistics-slice__fighters_cout">1000+</div>
          </div>
          <div className="Statistics-slice__years">
            <div className="Statistics-slice__years_text">лет</div>
            <div className="Statistics-slice__years_cout">8</div>
          </div>
        </div>
      </div>
      <div className="Rso-slice">
        <div className="container Rso-slice-container">
          <div className="Rso-slice__button">
            <div className="Rso-slice__button__love">
              <button className="Rso-slice__button__love__stylebtn"><span>любовь</span></button>
            </div>
            <div className="Rso-slice__button__friend">
              <button className="Rso-slice__button__friend__stylebtn"><span>друзья</span></button>
            </div>
            <div className="Rso-slice__button__work">
              <button className="Rso-slice__button__work__stylebtn"><span>работа</span></button>
            </div>
          </div>
          <div className="Rso-slice__info">
            <div className="Rso-slice__info__header">о нас</div>
            <div className="Rso-slice__info__name"> Российские Студенческие Отряды</div>
            <div className="Rso-slice__info__description">Молодежная общероссийская общественная организация «Российские Студенческие Отряды» (РСО) – крупнейшая молодежная организация страны, которая обеспечивает временной трудовой занятостью более 150 тысяч молодых людей из 81 субъекта РФ, а также занимается гражданским и патриотическим воспитанием, развивает творческий и спортивный потенциал молодежи.</div>
            <div className="Rso-slice__info__button">
              <button className="Rso-slice__info__button__stylebtn"><span>Подробнее</span></button>
            </div>
          </div>
        </div>
      </div>
      <div className="Video-slice">
        <video autoPlay loop playsInline controls className="Video-slice__style">
          <source src="video/promo.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="Directions-slice">
        <div className="container">
          <div className="directions__text"></div>
          <div className="directions__icons"></div>
        </div>
      </div>
      <div className="News-slice">
        <div className="container">
          <h3>новости</h3>
          <div className="News-slice__card">

          </div>
          ...
        </div>
      </div>
      <div className="Footer-slice">
        <div className="container">
          <div className="Footer-slice__links"></div>
          <div className="Footer-slice__info"></div>
          <div className="Footer-slice__copyright"></div>
        </div>
      </div>
    </div >
  );
}

export default App;
