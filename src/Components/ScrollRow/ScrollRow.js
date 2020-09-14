import React from "react";
import ScrollRowItem from "./ScrollRowItem";
import "./ScrollRow.css";

export default function ScrollRow({ title, images, small = false }) {
  return (
    <div className="scoll__row__container py-3 m-3 px-2">
      <p className="scroll__row__title px-3">{title}</p>
      <div className="scroll__row px-1 py-2 m-3 container-fluid d-flex flex-row align-items-center justify-content-between">
        {images.map((image) =>
          small ? (
            <ScrollRowItem key={image} small={true} img={image} />
          ) : (
            <ScrollRowItem key={image} img={image} />
          )
        )}
      </div>
    </div>
  );
}
