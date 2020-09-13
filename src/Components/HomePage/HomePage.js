import React from "react";
import CarouselContainer from "../Carousel/CarouselContainer";
import SmallContainer from "../SmallContainer/SmallContainer";
import Row from "../Row/Row";
import ScrollRow from "../ScrollRow/ScrollRow";
import { small_vectors, images_1, images_2, images_3 } from "../../data";

export default function HomePage() {
  document.title = "Amazon Home";
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
