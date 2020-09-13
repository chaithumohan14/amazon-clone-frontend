import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import SearchPage from "./Components/Search_Page/SearchPage";
import Footer from "./Components/Footer/Footer";

import { small_vectors, images_1, images_2, images_3 } from "./data";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/search">
        <SearchPage />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
