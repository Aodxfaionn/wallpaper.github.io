import React, { useState } from "react";
import "./blog.css";
import Path from "widgets/Path/ui/Path";
import Block from "widgets/Block/ui/Block";
import CardLink from "entities/CardLink/ui/CardLink";
import { blog } from "pages/Blog/model/arrForBlog";
import Pagination from "shared/ui/Pagination/ui/Pagination";
import { usePagination } from "shared/ui/Pagination/lib/usePagination";

function Blog() {
  const pagination = usePagination(9, blog);
  return (
    <>
      <Path page="Блог" />
      <Block title="Блог">
        <CardLink arr={pagination.curArr} style="blog" />
        <Pagination
          curPage={pagination.quan}
          lengthArr={blog.length}
          paginate={pagination.paginate}
          activePage={pagination.curPage}
        />
      </Block>
    </>
  );
}

export default Blog;
