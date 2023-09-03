import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "./cardLink.css";

type Props = {
  style: string;
  arr: arr[];
  childrenOne?: React.ReactElement;
  childrenEvery?: React.ReactElement;
  onClick?: () => void;
};

type arr = {
  link: string;
  img?: string;
  title?: string;
  desc?: string;
  additionally?: string;
};

function CardLink({ style, arr, onClick, childrenOne, childrenEvery }: Props) {
  return (
    <div className={`${style}`}>
      {childrenOne}
      {arr.map((elem, num) => (
        <Link
          to={`${elem.link}`}
          className={`${style}__card card-link`}
          key={num}
          onClick={onClick}
        >
          {elem.img && <img src={elem.img} alt="Image for block" />}
          <div className="card__text">
            <h3 className="card__title">{elem.title}</h3>
            <p className="card__desc">{elem.desc}</p>
            <p className="card__add">{elem.additionally}</p>
          </div>
          {childrenEvery}
        </Link>
      ))}
    </div>
  );
}

export default CardLink;
