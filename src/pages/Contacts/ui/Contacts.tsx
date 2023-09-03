import React from "react";
import "./contacts.css";
import Path from "widgets/Path/ui/Path";
import Block from "widgets/Block/ui/Block";
import { Text } from "shared/ui/Text/Text";
import Form from "widgets/Forma/ui/Forma";
import { Icon } from "shared";

function Contacts() {
  return (
    <div>
      <Path page="Контакты" />
      <Block title="Контакты">
        <div className="contactsBlock">
          <div className="contactsBlock__left">
            <Text
              style="contacts"
              title="Адрес"
              desc="Москва, ул. Новая Басманная, дом 18, строение 2"
            />
            <Text
              style="contacts"
              title="Телефон:"
              desc="+7 (495) 150-24-682"
            />
            <Text style="contacts" title="E-mail:" desc="zakaz@stenoprint.ru" />
            <Text
              style="contacts"
              title="Время работы:"
              desc="Пн - Пт: 9:00 - 18:00"
            />
            <div className="social">
              <Icon type="insta" link="/" style="social__icon" />
              <Icon type="vk" link="/" style="social__icon" />
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.662775%2C55.765874&mode=whatshere&whatshere%5Bpoint%5D=37.662776%2C55.765873&whatshere%5Bzoom%5D=17&z=16"
              width="560"
              height="400"
              frameBorder="1"
            ></iframe>
          </div>
        </div>
      </Block>
      <Form />
    </div>
  );
}

export default Contacts;
