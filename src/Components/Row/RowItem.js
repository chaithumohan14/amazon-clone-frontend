import React from "react";
import "./RowItem.css";

export default function RowItem({ text, img }) {
  return (
    <div className="row__item mx-auto  p-2 col-lg-3 col-md-6 col-12">
      <div className="inner__div__row">
        <p>{text}</p>
        <div className="img">
          <img src={img} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}
