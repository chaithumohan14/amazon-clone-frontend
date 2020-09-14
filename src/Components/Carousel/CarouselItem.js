import React from "react";

export default function CarouselItem({ img, active = false }) {
  return active ? (
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="" />
    </div>
  ) : (
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="" />
    </div>
  );
}
