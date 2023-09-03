import React, { useState } from "react";
import "./tabs.css";

type Props = {
  children: any;
  btnAdditional: React.ReactElement;
  nameTab: arr[];
  selected: number;
  onClick: (id: number) => void;
};

type arr = {
  title: string;
  id: number;
};

function Tabs({ children, btnAdditional, nameTab, selected, onClick }: Props) {
  return (
    <>
      <div className="tab__setting">
        <div className="tabs">
          {nameTab.map((tab) => (
            <span
              className={`tabs__btn ${
                tab.id == selected ? "active-tab" : "tabs__btn"
              }`}
              key={tab.id}
              onClick={() => onClick(tab.id)}
            >
              {tab.title}
            </span>
          ))}
        </div>
        {btnAdditional}
      </div>
      {children}
    </>
  );
}

export default Tabs;
