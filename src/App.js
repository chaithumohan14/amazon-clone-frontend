import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CarouselContainer from "./Components/Carousel/CarouselContainer";
import SmallContainer from "./Components/SmallContainer/SmallContainer";
import Row from "./Components/Row/Row";
import ScrollRow from "./Components/ScrollRow/ScrollRow";
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
        <CarouselContainer />
        <SmallContainer
          text="You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. "
          toLink="/"
          linkText="Click here to go to amazon.in"
        />
        <Row />
        <ScrollRow title="Discover Amazon" images={small_vectors} />
        <ScrollRow title="Electronics" images={images_1} />
        <ScrollRow title="Trending In Video Games" images={images_2} />
        <ScrollRow title="Best Baby Sellers" images={images_3} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
