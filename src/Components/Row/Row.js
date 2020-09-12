import React from "react";
import RowItem from "./RowItem";

export default function Row() {
  return (
    <div className="container-fluid row__container mx-auto">
      <div className="row">
        <RowItem
          text="Computers"
          img={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          }
        />
        <RowItem
          text="Amazon Basics"
          img={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          }
        />
        <RowItem
          text="Deals & Promotions"
          img={
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
          }
        />
        <RowItem
          text="Get Fit At Home"
          img={
            "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          }
        />
      </div>
    </div>
  );
}
