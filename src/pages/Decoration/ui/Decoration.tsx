import React from "react";
import "./decoration.css";
import Path from "widgets/Path/ui/Path";
import Slider from "widgets/Slider/ui/Slider";
import Block from "widgets/Block/ui/Block";
import Card from "entities/Card/ui/Card";
import Accordeon from "widgets/Accordeon/ui/Accordeon";
import { Text } from "shared/ui/Text/Text";
import { slider } from "../model/arrForDecoration";
import { decoration } from "../model/arrForDecoration";
import { howwork } from "../model/arrForDecoration";
import { stagework } from "../model/arrForDecoration";
import { questions } from "../model/arrForDecoration";

function Decoration() {
  return (
    <>
      <Slider slides={slider} style="decorationSlide" />
      <Path
        page="Услуги"
        link="services"
        pageLevel="Оформление офисов и коммерческих помещений в фирменном стиле"
      />
      <Block
        title="Оформление офисов и коммерческих помещений в фирменном стиле"
        desc="Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия."
      >
        <Card style="decoration" arr={decoration} />
      </Block>
      <Block
        title="Как мы работаем?"
        desc="Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий активизации."
      >
        <Card style="howwork" arr={howwork} />
      </Block>
      <section className="container stages">
        <Card
          childrenOne={
            <Text
              style="stagesText"
              title="Этапы реализации проекта"
              desc="Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий активизации."
            />
          }
          style="stage"
          arr={stagework}
        ></Card>
      </section>
      <Accordeon title="Популярные вопросы" arr={questions} />
    </>
  );
}

export default Decoration;
