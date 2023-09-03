import React, { Children } from "react";
import "./text.css";

type Props = {
  title?: string;
  desc?: string;
  style?: string;
  children?: React.ReactNode;
};

export function Text({ title, desc, style, children }: Props) {
  return (
    <div className={`${style}`}>
      <h2 className={`${style}__title`}>{title}</h2>
      <div className={`${style}__textBlock`}>
        <p className={`${style}__desc`}>{desc}</p>
        {children}
      </div>
    </div>
  );
}
