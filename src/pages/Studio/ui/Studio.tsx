import React from "react";
import "./studio.css";
import Path from "widgets/Path/ui/Path";
import Form from "widgets/Forma/ui/Forma";
import Block from "widgets/Block/ui/Block";
import Card from "entities/Card/ui/Card";
import { about } from "../model/arrForStudio";
import { active } from "../model/arrForStudio";

function Studio() {
  return (
    <>
      <Path page="О студии" />
      <Block
        title="О студии"
        desc="Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия."
      >
        <Card style="about" arr={about}></Card>
      </Block>
      <Block
        title="Наша активность"
        desc="Наша команда принимает активное участие в бизнес-мероприятиях, внося вклад в развитие отрасли вертикальной печати в России"
      >
        <Card style="active" arr={active}></Card>
      </Block>
      <Form />
    </>
  );
}

export default Studio;
