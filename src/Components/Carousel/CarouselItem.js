import React from "react";

export default function CarouselItem({ img, active = false }) {
  return active ? (
    <div class="carousel-item active">
      <img src={img} class="d-block w-100" alt="" />
    </div>
  ) : (
    <div class="carousel-item">
      <img src={img} class="d-block w-100" alt="" />
    </div>
  );
}
