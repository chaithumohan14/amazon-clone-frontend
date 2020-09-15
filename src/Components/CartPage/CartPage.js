import "./CartPage.css";
import React from "react";
import { Store } from "../../context";

export default function CartPage() {
  const [store] = Store();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 col-9"></div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
