import React from "react";

import Header from "../components/Header/Header";
import Routers from "../routes/Routers";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <>
      {<Header />}
      <main>
        <Home />
        <Routers />
      </main>
      {<Footer />}
    </>
  );
};

export default Layout;
