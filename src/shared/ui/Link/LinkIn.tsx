import React from "react";
import "./linkIn.css";
import { Link } from "react-router-dom";

type Props = {
  link: string;
  text: string;
};

export function LinkIn({ link, text }: Props) {
  return <Link to={`/${link}`} className="link">{text}</Link>;
}
