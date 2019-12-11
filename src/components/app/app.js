import React from "react";
import {Switch, Route} from "react-router-dom";

import Modal from "../modal/modal"
import Header from "../header/header";
import HomePage from "../pages/home-page/home-page";
import Page404 from "../pages/page-404/page-404";
import Footer from "../footer/footer";

const App = () => {

  return(
    <>
      <Modal />
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="">
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </>
  )
};

export default App