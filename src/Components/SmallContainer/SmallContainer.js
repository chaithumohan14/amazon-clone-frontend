import "./SmallContainer.css";
import { Link } from "react-router-dom";
import React from "react";

export default function SmallContainer({ text, toLink, linkText }) {
  return (
    <div className="small__container">
      <p className="mx-auto my-auto text-center">
        {text}
        <span>
          <Link to={toLink}>{linkText}</Link>
        </span>
      </p>
    </div>
  );
}
