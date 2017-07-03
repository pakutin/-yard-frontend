import React from "react";
import "./complex.css";
import complex1 from "./img/complex1.jpg";
import complex1_2x from "./img/complex1@2x.jpg";
import complex1_3x from "./img/complex1@3x.jpg";
import complex2 from "./img/complex2.jpg";
import complex2_2x from "./img/complex2@2x.jpg";
import complex2_3x from "./img/complex2@3x.jpg";
import complex3 from "./img/complex3.jpg";
import complex3_2x from "./img/complex3@2x.jpg";
import complex3_3x from "./img/complex3@3x.jpg";
import complex4 from "./img/complex4.jpg";
import complex4_2x from "./img/complex4@2x.jpg";
import complex4_3x from "./img/complex4@3x.jpg";
import complex5 from "./img/complex5.jpg";
import complex5_2x from "./img/complex5@2x.jpg";
import complex5_3x from "./img/complex5@3x.jpg";
import guide from "./img/polyankaPhoto.jpg";
import guide_2x from "./img/polyankaPhoto@2x.jpg";
import guide_3x from "./img/polyankaPhoto@3x.jpg";
import map from "./img/map.png";
import map_2x from "./img/map@2x.png";
import map_3x from "./img/map@3x.png";
import arrow from "./img/arrow.svg";
export default () => {
  return (
    <div>
      <main>
        <section className="promo">
          <div className="container">
            <div className="promo-wrapper">
              <div className="promo-complex">
                <h1 className="promo-name">Жилой комплекс «Полянка/44»</h1>
                <p className="promo-address">
                  Район Якиманка, улица Большая Полянка, дом 44 • 119180
                </p>
              </div>
              <button className="promo-favorite-button">
                В&nbsp;избранное
              </button>
            </div>
          </div>
        </section>
        <section className="promo-gallery">
          <img
            className="gallery-picture"
            src={complex1}
            srcSet={`${complex1_2x} 2x, ${complex1_3x} 3x`}
          />
          <img
            className="gallery-picture"
            src={complex2}
            srcSet={`${complex2_2x} 2x, ${complex2_3x} 3x`}
          />
          <img
            className="gallery-picture"
            src={complex3}
            srcSet={`${complex3_2x} 2x, ${complex3_3x} 3x`}
          />
          <img
            className="gallery-picture"
            src={complex4}
            srcSet={`${complex4_2x} 2x, ${complex4_3x} 3x`}
          />
          <img
            className="gallery-picture"
            src={complex5}
            srcSet={`${complex5_2x} 2x, ${complex5_3x} 3x`}
          />
          <div className="gallery-overlay">
            <button className="gallery-button">41 фотография</button>
          </div>
        </section>
        <article className="complex">
          <div className="container">
            <section className="complex-top-features">
              <div className="complex-top-feature">
                <h2 className="complex-heading">
                  950<br />
                  <div className="complex-top-feature-caption">предложений</div>
                </h2>
              </div>
              <div className="complex-top-feature complex-top-feature-architect">
                <h2 className="complex-heading">
                  John McAslan + Partners<br />
                  <div className="complex-top-feature-caption">архитектор</div>
                </h2>
              </div>
              <div className="complex-top-feature">
                <h2 className="complex-heading">
                  Группа «ПСН»<br />
                  <div className="complex-top-feature-caption">застройщик</div>
                </h2>
              </div>
            </section>
            <section className="complex-features">
              <h2 className="complex-heading complex-feature-heading">
                Характеристики
              </h2>
              <div className="row">
                <div className="col-xs-4">
                  <dl className="complex-feature-list">
                    <dt className="complex-feature-type">
                      Количество квартир:
                    </dt>
                    <dd className="complex-feature-value">1 503</dd>
                    <dt className="complex-feature-type">Статус:</dt>
                    <dd className="complex-feature-value">Квартиры</dd>
                    <dt className="complex-feature-type">Цены:</dt>
                    <dd className="complex-feature-value">
                      от 5.3 до 143.5 млн
                    </dd>
                  </dl>
                </div>
                <div className="col-xs-4">
                  <dl className="complex-feature-list">
                    <dt className="complex-feature-type">
                      Количество квартир:
                    </dt>
                    <dd className="complex-feature-value">1 503</dd>
                    <dt className="complex-feature-type">
                      Количество квартир:
                    </dt>
                    <dd className="complex-feature-value">1 503</dd>
                    <dt className="complex-feature-type">
                      Количество квартир:
                    </dt>
                    <dd className="complex-feature-value">1 503</dd>
                  </dl>
                </div>
                <div className="col-xs-4">
                  <dl className="complex-feature-list">
                    <dt className="complex-feature-type">
                      Количество квартир:
                    </dt>
                    <dd className="complex-feature-value">1 503</dd>
                    <dt className="complex-feature-type">
                      Количество квартир:
                    </dt>
                    <dd className="complex-feature-value">1 503</dd>
                    <dt className="complex-feature-type">
                      Количество квартир:
                    </dt>
                    <dd className="complex-feature-value">1 503</dd>
                  </dl>
                </div>
              </div>
              <div className="row" />
            </section>
            <section className="complex-description">
              <div className="row">
                <div className="col-xs-2">
                  <h2 className="complex-heading complex-description-heading">
                    Описание
                  </h2>
                </div>
                <div className="col-xs-10">
                  <p className="complex-description-text">
                    ВТБ Арена Парк —&nbsp;современный квартал в&nbsp;10&nbsp;минутах езды от&nbsp;Кремля. Территория разделена
                    на&nbsp;три зоны: жилой район, центральный стадион «Динамо» и&nbsp;большой спортивный парк.
                    <br />
                    <br />
                    {" "}
                    Жилой
                    район&nbsp;— это 13&nbsp;корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt Regency Moscow» и&nbsp;четыре
                    современных бизнес-центра. На&nbsp;территории&nbsp;— рестораны, спа-комплекс, фитнес-центр, химчистка, аптеки,
                    магазины и&nbsp;отделения банков. В&nbsp;каждом корпусе работает консьерж и&nbsp;круглосуточная охрана. Для&nbsp;жителей
                    оборудованы технические помещения под&nbsp;хранение колясок и велосипедов, комнаты для&nbsp;домашних животных
                    и&nbsp;уютные вестибюли с&nbsp;мягкими креслами для&nbsp;встреч с&nbsp;друзьями и&nbsp;соседями.
                    <br />
                    <br />
                    {" "}
                    Сердце ВТБ Арена Парк — стадион. Под&nbsp;одной крышей расположились музей, торгово-развлекательный комплекс,
                    подземная парковка для&nbsp;гостей и&nbsp;две крупные спортивные арены. Жизнь квартала сосредоточена в&nbsp;этой
                    зоне: здесь можно сходить на&nbsp;концерт или&nbsp;фестиваль, поболеть за&nbsp;любимую команду и&nbsp;купить
                    новую рубашку в&nbsp;торговом комплексе.
                    <br />
                    <br />
                    {" "}
                    Тихий жилой район от&nbsp;шумного стадиона отделяет Парк
                    Физкультуры и&nbsp;Отдыха. Здесь каждый найдет занятие: для&nbsp;детей оборудованы игровые зоны, для&nbsp;подростков&nbsp;—
                    спортивные площадки на&nbsp;открытом воздухе, для&nbsp;взрослых — велосипедные дорожки и&nbsp;зоны отдыха,
                    где&nbsp;можно подышать свежим воздухом во&nbsp;время рабочего перерыва.
                  </p>
                </div>
              </div>
            </section>
            <section className="complex-facilities">
              <h2 className="complex-heading complex-facilities-heading">
                Инфраструктура
              </h2>
              <div className="row">
                <div className="col-xs-2">
                  <p className="complex-facility">Бассейн</p>
                  <p className="complex-facility">Частная школа</p>
                </div>
                <div className="col-xs-2">
                  <p className="complex-facility">Детский сад</p>
                  <p className="complex-facility">Частная школа</p>
                </div>
                <div className="col-xs-2">
                  <p className="complex-facility">Частная школа</p>
                  <p className="complex-facility">Частная школа</p>
                </div>
                <div className="col-xs-2">
                  <p className="complex-facility">Бассейн</p>
                </div>
                <div className="col-xs-2">
                  <p className="complex-facility">Детский сад</p>
                </div>
                <div className="col-xs-2">
                  <p className="complex-facility">Частная школа</p>
                </div>
              </div>
            </section>
          </div>
        </article>
        <section className="complex-flat-cards">
          <div className="container">
            <h2 className="complex-heading complex-flat-cards-heading">
              Предложения в ЖК «Полянка/44»
            </h2>
            <div className="row">
              <div className="col-xs-4">
                <div className="complex-flat-card">
                  <h3 className="complex-flat-card-subheading">
                    1-комнатные квартиры
                  </h3>
                  <h4 className="complex-flat-card-feature">Площадь</h4>
                  <p className="complex-flat-card-feature-value">
                    от 59 до 120 м²
                  </p>
                  <h4 className="complex-flat-card-feature">Стоимость</h4>
                  <p className="complex-flat-card-feature-value">
                    от 20.3 до 84.2 млн руб
                  </p>
                  <button className="complex-flat-card-button">
                    Посмотреть&nbsp;предложения
                  </button>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="complex-flat-card">
                  <h3 className="complex-flat-card-subheading">
                    2-комнатные квартиры
                  </h3>
                  <h4 className="complex-flat-card-feature">Площадь</h4>
                  <p className="complex-flat-card-feature-value">
                    от 59 до 120 м²
                  </p>
                  <h4 className="complex-flat-card-feature">Стоимость</h4>
                  <p className="complex-flat-card-feature-value">
                    от 20.3 до 84.2 млн руб
                  </p>
                  <button className="complex-flat-card-button">
                    Посмотреть&nbsp;предложения
                  </button>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="complex-flat-card">
                  <h3 className="complex-flat-card-subheading">
                    3-комнатные квартиры
                  </h3>
                  <h4 className="complex-flat-card-feature">Площадь</h4>
                  <p className="complex-flat-card-feature-value">
                    от 59 до 120 м²
                  </p>
                  <h4 className="complex-flat-card-feature">Стоимость</h4>
                  <p className="complex-flat-card-feature-value">
                    от 20.3 до 84.2 млн руб
                  </p>
                  <button className="complex-flat-card-button">
                    Посмотреть&nbsp;предложения
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="guide">
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <div className="guide-name">
                  <p className="guide-label">Якиманка</p>
                  <p className="guide-tagline">
                    Исторический центр Москвы в двух
                    <br />
                    километрах от&nbsp;Кремля
                  </p>
                  <p><a className="guide-link" href>Гид по Якиманке →</a></p>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="guide-cover">
                  <img src={guide} srcSet={`${guide_2x} 2x, ${guide_3x} 3x`} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="sights">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <img
                className="sights-map"
                src={map}
                srcSet={`${map_2x} 2x, ${map_3x} 3x`}
              />
            </div>
            <div className="col-xs-6">
              <div className="sights-list">
                <div className="sight">
                  <p className="sight-name">Красный Октябрь</p>
                  <p className="sight-distance">24 минуты, 6 км</p>
                </div>
                <div className="sight">
                  <p className="sight-name">World class</p>
                  <p className="sight-distance">2 минуты, 300 м</p>
                </div>
                <div className="sight">
                  <p className="sight-name">Третьяковская галерея</p>
                  <p className="sight-distance">14 минут, 4 км</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
