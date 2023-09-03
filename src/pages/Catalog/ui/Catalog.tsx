import React, { useState } from "react";
import "./catalog.css";
import Path from "widgets/Path/ui/Path";
import Block from "widgets/Block/ui/Block";
import CardLink from "entities/CardLink/ui/CardLink";
import Pagination from "shared/ui/Pagination/ui/Pagination";
import Filter from "features/Filter/ui/Filter";
import { catalog } from "../model/arrForCatalog";
import { usePagination } from "shared/ui/Pagination/lib/usePagination";

function Catalog() {
  const pagination = usePagination(15, catalog);
  return (
    <>
      <Path page="Каталог товаров" />
      <Block title="Каталог товаров">
        <div className="catalog">
          <Filter />
          <CardLink style="listProducts" arr={pagination.curArr} />
        </div>
        <Pagination
          curPage={pagination.quan}
          lengthArr={catalog.length}
          paginate={pagination.paginate}
          activePage={pagination.curPage}
        />
      </Block>
    </>
  );
}

export default Catalog;
