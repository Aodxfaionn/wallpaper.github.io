import React, { useState } from "react";
import "./portfolio.css";
import Path from "widgets/Path/ui/Path";
import { portfolio } from "../model/arrForPortfolio";
import Pagination from "shared/ui/Pagination/ui/Pagination";
import Modal from "widgets/Modal/ui/Modal";
import { usePagination } from "shared/ui/Pagination/lib/usePagination";

function Portfolio() {
  const [isActive, setIsActive] = useState(false);
  const pagination = usePagination(9, portfolio);

  type elem = {
    img: string;
  };
  return (
    <>
      <Path page="Портфолио" />
      <section className="container portfolio">
        <h2 className="title">Портфолио</h2>
        <div className="portfolio__work">
          {pagination.curArr.map((elem: elem, num: number) => (
            <div key={num}>
              <img
                src={elem.img}
                alt="Portfolio"
                onClick={() => setIsActive(true)}
              />
              {isActive && (
                <Modal active={isActive} setActive={setIsActive}>
                  <img src={elem.img} alt="Portfolio" className="modal__img" />
                </Modal>
              )}
            </div>
          ))}
        </div>
        <Pagination
          curPage={pagination.quan}
          lengthArr={portfolio.length}
          paginate={pagination.paginate}
          activePage={pagination.curPage}
        />
      </section>
    </>
  );
}

export default Portfolio;
