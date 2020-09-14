import React from "react";

export default function FooterItem({ empty = false, items, title }) {
  return empty ? (
    <div className="col-md-2"></div>
  ) : (
    <div className="col-md-2  col-12 d-flex flex-column align-items-lg-start align-items-center justify-content-start">
      <p className="footer__item__title">{title}</p>
      {items.map((item) => (
        <p key={item} className="footer__item">
          {item}
        </p>
      ))}
    </div>
  );
}
