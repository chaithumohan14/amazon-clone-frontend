import React from "react";
import "./Footer.css";
import FooterItem from "./FooterItem";

export default function Footer() {
  const footer_navs = {
    "Get to Know Us": [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Tours",
    ],
    " Make Money with Us": [
      "Sell on Amazon",
      "Sell on Amazon Business",
      "Sell Your Apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
      "›See More Make Money with Us",
    ],
    "Amazon Payment Products": [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
    "Let Us Help You": [
      "Amazon and COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Amazon Assistant",
      "Help",
    ],
  };
  const backToTop = (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <React.Fragment>
      <div
        onClick={(e) => backToTop(e)}
        className="py-3 container-fluid back__to__top text-center "
      >
        <p className="">Back To Top</p>
      </div>
      <div className="footer__items py-3 container-fluid">
        <div className="row">
          <FooterItem empty />
          {Object.keys(footer_navs).map((key) => (
            <FooterItem title={key} items={footer_navs[key]} />
          ))}
          <FooterItem empty />
        </div>
      </div>
    </React.Fragment>
  );
}
