import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Icon } from "shared";
import { serviceMain } from "pages/Main/model/arrForMain";
import { wallpapers } from "pages/Catalog/model/arrForCatalog";

function Footer() {
  return (
    <div className="footer container">
      <ul className="footer__wallpaper">
        <h4 className="footer__title">Каталог товаров</h4>
        {wallpapers.map((wp, key) => (
          <li key={wp.id} className="footer__wallpaper-link">
            <Link to="/catalog">{wp.title}</Link>
          </li>
        ))}
      </ul>

      <ul className="footer__service">
        <h4 className="footer__title">Наши услуги</h4>
        {serviceMain.map((ysl, key) => (
          <li key={key} className="footer__service-link">
            <Link to="/decoration">{ysl.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="footer__nav">
        <li className="footer__nav-link">
          <Link to="/studio">О студии</Link>
        </li>
        <li className="footer__nav-link">
          <Link to="/portfolio">Портфолио</Link>
        </li>
        <li className="footer__nav-link">
          <Link to="/blog">Блог</Link>
        </li>
        <li className="footer__nav-link">
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
      <div className="footer__info">
      <div className="header__text">
              <p className="footer__text-title">Позвонить нам:</p>
              <a href="tel:+75558889866" className="footer__text-link">7 (555) 888-98-66</a>
            </div>
            <div className="footer__text">
              <p className="footer__text-title">Написать нам:</p>
              <a href="mailto:info@stenoprint.ru" className="footer__text-link">info@stenoprint.ru</a>
            </div>
        <div className="social">
          <Icon type="insta" link="/" style="social__icon" />
          <Icon type="vk" link="/" style="social__icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
