import React from "react";
import "./services.css";
import Path from "widgets/Path/ui/Path";
import Block from "widgets/Block/ui/Block";
import CardLink from "entities/CardLink/ui/CardLink";
import { services } from "../model/arrForService";

function Services() {
    return <>
        <Path page="Услуги" />
        <Block
        title="Услуги"
        desc="Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия."
      >
        <CardLink style="service" arr={services}></CardLink>
      </Block>
    </>
}

export default Services;