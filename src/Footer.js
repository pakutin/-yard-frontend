import React from "react";
import arrow from "./img/arrow.svg";
export default () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <div className="col-xs-4">
            <h4 className="footer-heading footer-company">ООО «Ярд»</h4>
            <p className="footer-detail">ОГРН 1175074002531</p>
            <p className="footer-detail">ИНН 5036165365</p>
            <p className="footer-detail">+7 (999) 821-14-88</p>
          </div>
          <div className="col-xs-2">
            <nav className="footer-nav">
              <h4 className="footer-heading">Жилые комплексы</h4>
              <p><a className="footer-link" href>ВТБ Арена Парк</a></p>
              <p><a className="footer-link" href>Садовые кварталы</a></p>
              <p><a className="footer-link" href>Резиденция Монэ</a></p>
              <p className="footer-link-last">
                <a className="footer-link" href>
                  Все ЖК Москвы
                  <img className="link-arrow" src={arrow} />
                </a>
              </p>
            </nav>
          </div>
          <div className="col-xs-2">
            <nav className="footer-nav">
              <h4 className="footer-heading">Компания</h4>
              <p><a className="footer-link" href>Команда</a></p>
              <p><a className="footer-link" href>О компании</a></p>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-4 col-xs-8">
            <p className="footer-caption">
              Любая информация, представленная на&nbsp;данном сайте, носит исключительно информационный характер и&nbsp;ни&nbsp;при&nbsp;каких
              условиях не&nbsp;является публичной офертой, определяемой положениями статьи 437&nbsp;ГК&nbsp;РФ. © ООО&nbsp;«Ярд»,
              2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
