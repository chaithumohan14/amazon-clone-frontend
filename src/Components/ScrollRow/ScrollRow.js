import React from "react";
import ScrollRowItem from "./ScrollRowItem";
import "./ScrollRow.css";

export default function ScrollRow({ title, images, small = false }) {
  return (
    <div className="scoll__row__container py-3 m-3 px-4">
      <p className="scroll__row__title">{title}</p>
      <div className="scroll__row px-1 py-2 m-3 container-fluid d-flex flex-row align-items-center justify-content-between">
        {images.map((image) =>
          small ? (
            <ScrollRowItem small={true} img={image} />
          ) : (
            <ScrollRowItem img={image} />
          )
        )}
      </div>
    </div>
  );
}
