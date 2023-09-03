import React, { useState } from "react";

export const usePagination = (quanity: number, arr: any) => {
  const [curPage, setCurPage] = useState(1);
  const [quan] = useState(quanity);
  const lastArrIndex = curPage * quan;
  const firstArrIndex = lastArrIndex - quan;
  const curArr = arr.slice(firstArrIndex, lastArrIndex);
  const paginate = (pageNumber: number) => {
    setCurPage(pageNumber);
  };
  return {
    quan,
    curArr,
    curPage,
    paginate,
  };
};
