import React from "react";
import "./logo.css";
import logo from "../../../assets/images/logo.png";

export function Logo() {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Logo" />
    </a>
  );
}
