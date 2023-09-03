import React from "react";
import { useState } from "react";
import "./accordeon.css";

type Props = {
  title?: string;
  arr: arr[];
};

type arr = {
  id: number;
  title: string;
  info: string;
};

function Accordeon({ title, arr }: Props) {
  const [openId, setOpenId] = useState(0);
  const openText = (id: number) => {
    id === openId ? setOpenId(0) : setOpenId(id);
  };
  return (
    <section className="container accordeon">
      {title && <h2 className="title">{title}</h2>}
      <div className="accordeon__container">
        {arr.map((question) => (
          <div className="question" key={question.id}>
            <div
              className="question__head"
              onClick={() => openText(question.id)}
            >
              <h3 className="question__title">{question.title}</h3>
              <svg
                className={`question__arrow ${
                  question.id == openId ? "down" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
              </svg>
            </div>
            <div
              className={`question__text ${
                question.id == openId ? "open" : ""
              }`}
            >
              {question.info}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Accordeon;
