import React from "react";
import { useState, useEffect } from "react";
import "./slider.css";
import { Icon } from "shared";
import { LinkIn } from "shared/ui/Link/LinkIn";

interface ISlides {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export interface SliderProps {
  slides: ISlides[];
  style?: string;
  btn?: string;
}

const Slider = ({ slides, style, btn }: SliderProps) => {
  const [slide, setSlide] = useState<number>(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");
  const [curTimer, setCurTimer] = useState<NodeJS.Timeout>();

  const handleClick = (move: number) => {
    const timer = setTimeout(() => {
      setSlide((slide) => slide + move);
      setFadeState("fade-in");
    }, 300);
    clearTimeout(curTimer);
    setFadeState("fade-out");
    setCurTimer(timer);
  };

  return (
    <div className={`slider ${style}`}>
      {slide > 0 && (
        <Icon
          type="prev"
          style="slider__arr slider__arr-left"
          onClick={() => handleClick(-1)}
        />
      )}
      <div className={`${fadeState} sliderBlock`}>
        <img src={`${slides[slide].image}`} className="sliderBlock__img" />
        <h1 className="sliderBlock__title">{slides[slide].title}</h1>
        <p className="sliderBlock__desc">{slides[slide].desc}</p>
        {btn && <LinkIn link="./services" text="Узнать подробнее" />}
      </div>
      {slide < slides.length - 1 && (
        <Icon
          type="next"
          style="slider__arr slider__arr-right"
          onClick={() => handleClick(1)}
        />
      )}
    </div>
  );
};

export default Slider;
