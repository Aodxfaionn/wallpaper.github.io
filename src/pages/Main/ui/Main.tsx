import React from "react";
import { useState, useEffect } from "react";
import "./main.css";
import Block from "widgets/Block/ui/Block";
import Card from "entities/Card/ui/Card";
import CardLink from "entities/CardLink/ui/CardLink";
import Slider from "widgets/Slider/ui/Slider";
import Form from "widgets/Forma/ui/Forma";
import Modal from "widgets/Modal/ui/Modal";
import Tabs from "widgets/Tabs/ui/Tabs";
import { LinkIn } from "shared/ui/Link/LinkIn";
import { Text } from "shared/ui/Text/Text";
import { place } from "../model/arrForMain";
import { slider } from "../model/arrForMain";
import { wallpaper } from "../model/arrForMain";
import { advantages } from "../model/arrForMain";
import { serviceMain } from "../model/arrForMain";
import { design } from "../model/arrForMain";
import { vinil } from "../model/arrForMain";
import { firm } from "../model/arrForMain";
import { wallpapers } from "pages/Catalog/model/arrForCatalog";

function Main() {
  const [isActive, setIsActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState(wallpapers[0].id);
  const toggleTab = (id: number) => {
    setSelectedTab(id);
  };
  return (
    <>
      <Slider slides={slider} style="container" btn="true" />
      <Text
        style="wallpaper"
        title={wallpaper.title}
        desc={wallpaper.desc}
      ></Text>
      <Block title="О нас">
        <Card style="advantages" arr={advantages} />
      </Block>
      <Block
        title="Наши услуги"
        desc="С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи."
      >
        <CardLink style="serviceMain" arr={serviceMain} />
      </Block>
      <Block title="Популярные товары">
        <Tabs
          btnAdditional={<LinkIn link="catalog" text="Смотреть все товары >" />}
          nameTab={wallpapers}
          selected={selectedTab}
          onClick={toggleTab}
        >
          {selectedTab === wallpapers[0].id && (
            <Card
              style="popular"
              arr={design}
              childrenEvery={
                <div className="popular__link-anim">
                  <LinkIn link="product" text="Подробнее" />
                </div>
              }
            />
          )}
          {selectedTab === wallpapers[1].id && (
            <Card
              style="popular"
              arr={vinil}
              childrenEvery={
                <div className="popular__link-anim">
                  <LinkIn link="product" text="Подробнее" />
                </div>
              }
            />
          )}
          {selectedTab === wallpapers[2].id && (
            <Card
              style="popular"
              arr={firm}
              childrenEvery={
                <div className="popular__link-anim">
                  <LinkIn link="product" text="Подробнее" />
                </div>
              }
            />
          )}
        </Tabs>
      </Block>
      <Block
        title="Место применения"
        desc="С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи."
      >
        <div className="place">
          {place.map((elem, num) => (
            <div className="place__card card" key={num}>
              <img
                src={elem.img}
                alt="Portfolio"
                onClick={() => setIsActive(true)}
              />
              {isActive && (
                <Modal active={isActive} setActive={setIsActive}>
                  <img src={elem.img} alt="Portfolio" className="modal__img" />
                </Modal>
              )}
              <div className="card__text">
                <h3 className="card__title">{elem.title}</h3>
                <p className="card__desc">{elem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>
      <Form />
    </>
  );
}

export default Main;
