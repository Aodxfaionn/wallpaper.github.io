import React from "react";
import "./incatalog.css";
import image from "../../../assets/images/header-catalog.png";
import { Link } from "react-router-dom";

export function Incatalog() {
  return (
    <div className="incatalog">
      <div className="container">
        <p className="incatalog__text">
          При покупке 10-ти рулонов обоев - дизайн в ПОДАРОК!
        </p>
        <Link to="/catalog" className="incatalog__link">
          Перейти
        </Link>
        <img src={image} alt="In catalog" />
      </div>
    </div>
  );
}
