import React from "react";
import "./SearchComponent.css";
export default function SearchComponent({ img, title, price, stock }) {
  return (
    <div className="search__component mx-auto my-4 col-9 container-fluid">
      <div className="row">
        <div className="col-3">
          <img src={img} height="90%" width="90%" alt="" srcset="" />
        </div>
        <div className="col-9">
          <p className="search__component__title">{title}</p>
          <p className="search__component__price">${price}</p>
          <p className="search__component__stock">{stock}</p>
        </div>
      </div>
    </div>
  );
}
