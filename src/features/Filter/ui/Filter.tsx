import React, { useState } from "react";
import "./filter.css";
import { Button } from "shared";

function Filter() {
  const [isGradientChecked, setIsGradientChecked] = useState(false);
  const [isAcvarelChecked, setIsAcvarelChecked] = useState(false);
  const [isModernChecked, setIsModernChecked] = useState(false);
  const [isFlowersChecked, setIsFlowersChecked] = useState(false);
  const [isClassiChecked, setIsClassicChecked] = useState(false);
  const [minPrice, setMinPrice] = useState<string | number>("");
  const [maxPrice, setMaxPrice] = useState<string | number>("");
  return (
    <div className="filter">
      <div className="filter__field filter__collection">
        <h3 className="filter__title">Коллекция</h3>
        <div>
          <input type="checkbox" id="gradient" name="collection" />
          <label htmlFor="gradient">Градиенты</label>
        </div>
        <div>
          <input type="checkbox" id="acvarel" name="collection" />
          <label htmlFor="acvarel">Акварель</label>
        </div>
        <div>
          <input type="checkbox" id="modern" name="collection" />
          <label htmlFor="modern">Модерн</label>
        </div>
        <div>
          <input type="checkbox" id="flowers" name="collection" />
          <label htmlFor="flowers">Цветы</label>
        </div>
        <div>
          <input type="checkbox" id="classic" name="collection" />
          <label htmlFor="classic">Классика</label>
        </div>
      </div>
      <div className="filter__field filter__price">
        <h3 className="filter__title">Цена</h3>
        <div>
          <label htmlFor="minPrice">От</label>
          <input
            type="number"
            name="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="maxPrice">До</label>
          <input
            type="number"
            name="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="filter__do">
        <Button text="Применить" />
        <p className="filter__reset">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M18.1575 7.41421L16.7432 6L12.5006 10.2426L8.25804 6.00003L6.84383 7.41425L11.0864 11.6568L6.84375 15.8995L8.25796 17.3137L12.5006 13.071L16.7433 17.3137L18.1575 15.8995L13.9148 11.6568L18.1575 7.41421Z"
              fill="#192040"
            />
          </svg>
          Сбросить
        </p>
      </div>
    </div>
  );
}

export default Filter;
