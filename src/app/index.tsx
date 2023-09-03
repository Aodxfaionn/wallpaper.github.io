import React, { useLayoutEffect } from "react";
import { Route, BrowserRouter, HashRouter, Routes, useLocation } from "react-router-dom";
import "./index.css";
import "./normalize.css";
import Main from "pages/Main/ui/Main";
import Blog from "pages/Blog/ui/Blog";
import Catalog from "pages/Catalog/ui/Catalog";
import Product from "pages/Product/ui/Product";
import Contacts from "pages/Contacts/ui/Contacts";
import Portfolio from "pages/Portfolio/ui/Portfolio";
import Services from "pages/Services/ui/Services";
import Decoration from "pages/Decoration/ui/Decoration";
import BlogArticle from "pages/BlogArticle/ui/BlogArticle";
import Studio from "pages/Studio/ui/Studio";
import Error from "pages/Error/ui/Error";
import Header from "widgets/Header/ui/Header";
import Footer from "widgets/Footer/ui/Footer";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="product" element={<Product />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/services" element={<Services />} />
        <Route path="decoration" element={<Decoration />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="article" element={<BlogArticle />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
