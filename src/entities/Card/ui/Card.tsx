import React from "react";
import "./card.css";

type Props = {
  style: string;
  arr: arr[];
  childrenOne?: React.ReactElement;
  childrenEvery?: React.ReactElement;
  onClick?: () => void;
};

type arr = {
  img?: string;
  title?: string;
  desc?: string;
  additionally?: string;
};

function Card({ style, arr, onClick, childrenOne, childrenEvery }: Props) {
  return (
    <div className={`${style}`}>
      {childrenOne}
      {arr.map((elem, num) => (
        <div className={`${style}__card card`} key={num} onClick={onClick}>
         {elem.img && <img src={elem.img} alt="Image for block" /> }
          {(elem.title ||
            elem.desc) && (
              <div className="card__text">
                <h3 className="card__title">{elem.title}</h3>
                <p className="card__desc">{elem.desc}</p>
                <p className="card__add">{elem.additionally}</p>
              </div>
            )}
          {childrenEvery}
        </div>
      ))}
    </div>
  );
}

export default Card;
