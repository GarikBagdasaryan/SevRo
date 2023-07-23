function App() {

  const LoadImg = event => {
    event.currentTarget.classList.add('active');

  };
  const ActionImg = event => {
    const cards = document.querySelectorAll('.Directions-slice__icons__card')
    for (var i in cards) {
      if (cards[i].classList.contains('active')) { cards[i].classList.remove('active'); break; }
    }
    event.currentTarget.classList.add('active');
  };

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
        <video loop playsInline controls className="Video-slice__style">
          <source src="video/promo.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="Directions-slice">
        <div className="container Directions-slice-container">
          <div className="Directions-slice__info">
            <div className="Directions-slice__info__header">направления</div>
            <div className="Directions-slice__info__name"> Студенческие Педагогические Отряды</div>
            <div className="Directions-slice__info__description">Молодежная общероссийская общественная организация «Российские Студенческие Отряды» (РСО) – крупнейшая молодежная организация страны, которая обеспечивает временной трудовой занятостью более 150 тысяч молодых людей из 81 субъекта РФ, а также занимается гражданским.</div>
            <div className="Directions-slice__info__button">
              <button className="Directions-slice__info__button__stylebtn"><span>Перейти</span></button>
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
      <div className="News-slice">
        <div className="container News-slice-container">
          <div className="News-slice__header-slice">новости</div>
          <div className="News-slice__slider">
            <div className="News-slice__slider__header">
              <div className="News-slice__slider__header__info">
                <div className="News-slice__slider__header-name">Следите за новостями в:
                </div>
                <div className="News-slice__slider__header-icons">
                  <img width={64} height={64} src="img/ico13-tg.svg"></img>
                  <img width={64} height={64} src="img/ico12-vk.svg"></img>
                </div>
              </div>
              <div className="News-slice__slider__header-arrows">
                <div className="News-slice__slider__header-arrows_left"></div>
                <div className="News-slice__slider__header-arrows_right"></div>
              </div>
            </div>
            <div className="News-slice__slider__content">
              <div className="News-slice__slider__card">
                <div className="News-slice__slider__card__photo"></div>
                <div className="News-slice__slider__card__name"> 8 лет СевРо</div>
                <div className="News-slice__slider__card__description">Студенческие педагогические отряды (СПО) – ежегодно организовывают каникулярный отдых детей организовывают каникулярный отдых детей...</div>
              </div>
              <div className="News-slice__slider__card">
                <div className="News-slice__slider__card__photo"></div>
                <div className="News-slice__slider__card__name"> 8 лет СевРо</div>
                <div className="News-slice__slider__card__description">Студенческие педагогические отряды (СПО) – ежегодно организовывают каникулярный отдых детей организовывают каникулярный отдых детей...</div>
              </div>
              <div className="News-slice__slider__card">
                <div className="News-slice__slider__card__photo"></div>
                <div className="News-slice__slider__card__name"> 8 лет СевРо</div>
                <div className="News-slice__slider__card__description">Студенческие педагогические отряды (СПО) – ежегодно организовывают каникулярный отдых детей организовывают каникулярный отдых детей...</div>
              </div>
              <div className="News-slice__slider__card">
                <div className="News-slice__slider__card__photo"></div>
                <div className="News-slice__slider__card__name"> 8 лет СевРо</div>
                <div className="News-slice__slider__card__description">Студенческие педагогические отряды (СПО) – ежегодно организовывают каникулярный отдых детей организовывают каникулярный отдых детей...</div>
              </div>
            </div>
          </div>
          ...
        </div>
      </div>
      <div className="Footer-slice">
        <div className="container">
          <div className="Footer-slice__content">
            <div className="Footer-slice__content__links">навигация
              <div className="Footer-slice__content__links__nav">
                <ul>
                  <li><a href="">О нас</a></li>
                  <li><a href="">Деятельность</a></li>
                  <li><a href="">Новости</a></li>
                  <li><a href="">Галерея</a></li>
                  <li><a href="">Другое</a></li>
                  <li><a href="">Q/A</a></li>
                </ul>
              </div>
            </div>
            <div className="Footer-slice__content__contact">контакты
              <div className="Footer-slice__content__contact_nav">
                <ul>
                  <li><a href="">вконтакте</a></li>
                  <li><a href="">телеграм</a></li>
                  <li><a href="">+79780002255</a></li>
                  <li><a href="">sevro@mai.ru</a></li>
                </ul>
              </div>
            </div>
            <div className="Footer-slice__content__info">
              <div className="Footer-slice__content__info__name">
                Найди работу в студенческих отрядах
              </div>
              <div className="Footer-slice__content__info__button">
                <button className="Footer-slice__content__info__button-style"><span>Вступить</span></button>
              </div>
            </div>
          </div>
          <div className="Footer-slice__copyright"></div>
        </div>
      </div>
    </div >
  );
}



export default App;
