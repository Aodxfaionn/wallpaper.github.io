import React from "react";
import "./block.css";

type Props = {
  title: string;
  desc?: string;
  children?: React.ReactElement | React.ReactNode;
};

function Block({ title, desc, children }: Props) {
  return (
    <section className="container block">
      <h2 className="title">{title}</h2>
      {desc && <p className="desc">{desc}</p>}
      {children}
    </section>
  );
}

export default Block;
