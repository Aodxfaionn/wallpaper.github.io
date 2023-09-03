import React from "react";
import "./icon.css";

export type IconType = "poisk" | "home" | "insta" | "vk" | "eye" | "prev" | "next";

export type Props = {
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  link?: string;
  type: IconType;
  style: string;
};

export function Icon(props: Props) {
  const isLink = props.link;
  if (isLink) {
    return (
      <a href={`${props.link}`}>
        <img
          src={require(`./icons/${props.type}.svg`)}
          alt="icon"
          onClick={props.onClick}
          className={props.style}
        />
      </a>
    );
  } else {
    return (
      <img
        src={require(`./icons/${props.type}.svg`)}
        alt="icon"
        onClick={props.onClick}
        className={props.style}
      />
    );
  }
}
