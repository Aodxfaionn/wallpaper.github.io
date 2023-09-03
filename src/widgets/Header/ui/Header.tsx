import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Logo } from "shared";
import { Incatalog } from "features/Incatalog/ui/Incatalog";
import { Icon } from "shared";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="header">
      <Incatalog />
      <div className="container">
        <Logo />
        <div className="header__block">
          <div className="header__info">
            <div className="header__text">
              <p className="header__text-title">Позвонить нам:</p>
              <a href="tel:+75558889866" className="header__text-link">7 (555) 888-98-66</a>
            </div>
            <div className="header__text">
              <p className="header__text-title">Написать нам:</p>
              <a href="mailto:info@stenoprint.ru" className="header__text-link">info@stenoprint.ru</a>
            </div>
            <div className="social">
              <Icon type="insta" link="/" style="social__icon" />
              <Icon type="vk" link="/" style="social__icon" />
            </div>
          </div>
          <nav>
            <ul className={mobileMenu ? "header__nav open" : "header__nav"}>
              <li className="header__nav-link">
                <NavLink to="/catalog" className="header__nav-catalog">
                  Каталог товаров
                </NavLink>
              </li>
              <li className="header__nav-link">
                <NavLink to="/studio">О студии</NavLink>
              </li>
              <li className="header__nav-link">
                <NavLink to="/services">Наши услуги</NavLink>
              </li>
              <li className="header__nav-link">
                <NavLink to="/portfolio">Портфолио</NavLink>
              </li>
              <li className="header__nav-link">
                <NavLink to="/blog">Блог</NavLink>
              </li>
              <li className="header__nav-link">
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
            </ul>
          </nav>
          <div onClick={() => setMobileMenu(!mobileMenu)} className="mobileMenu">
            <span className="mobileMenu__burger"></span>
            <span className="mobileMenu__burger"></span>
            <span className="mobileMenu__burger"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
