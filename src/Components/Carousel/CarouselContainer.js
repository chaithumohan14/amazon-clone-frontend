import React from "react";
import CarouselItem from "./CarouselItem";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import "./CarouselContainer.css";

export default function CarouselContainer() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <CarouselItem img={img1} active />
        <CarouselItem img={img2} />
        <CarouselItem img={img3} />
        <CarouselItem img={img4} />
      </div>
    </div>
  );
}
