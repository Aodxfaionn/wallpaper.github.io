import React from "react";
import "./pagination.css";

type Props = {
  curPage: number;
  lengthArr: number;
  activePage: number;
  paginate: (arg0: number) => void;
};

function Pagination({ curPage, lengthArr, activePage, paginate }: Props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(lengthArr / curPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((num) => (
        <li className="pagination__item" key={num}>
          {activePage == num ? (
            <a
              href="#"
              className="pagination__link pagination__link-active"
              onClick={() => paginate(num)}
            >
              {num}
            </a>
          ) : (
            <a
              href="#"
              className="pagination__link"
              onClick={() => paginate(num)}
            >
              {num}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
