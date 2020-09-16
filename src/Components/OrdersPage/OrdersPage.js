import "./OrdersPage.css";
import React, { useState, useEffect } from "react";
import OrdersComponent from "./OrdersComponent";
import { Store } from "../../context";
import { URL } from "../../reducer";
export default function CartPage() {
  const [ordersData, setOrdersData] = useState([]);
  const [checkoutPrice, setCheckoutPrice] = useState(0);
  const [store] = Store();
  useEffect(() => {
    const popOrders = () => {
      store.user.orders.map(async (cart) => {
        await fetch(`${URL}/item?itemId=${cart}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.err) {
              let newOrdersData = ordersData;
              newOrdersData.push(data);
              setOrdersData(newOrdersData);
              setCheckoutPrice(checkoutPrice + data.amountMax);
            } else {
              console.log("Item Not Returned");
            }
          })
          .catch((err) => console.log(err.message));
        return null;
      });
    };
    popOrders();
  }, []);
  return store.user.orders.length !== 0 ? (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 col-9">
          {ordersData.map((cartItem) => (
            <OrdersComponent
              key={cartItem._id}
              id={cartItem._id}
              img={cartItem.imageURLs.split(",")[0]}
              name={cartItem.name}
              stock={cartItem.isSale}
              price={cartItem.amountMax}
            />
          ))}
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  ) : (
    <div className="no__results__div my-5 jumbotron mx-auto">
      <p className="px-auto text-center no__results">Orders Is Empty </p>
    </div>
  );
}
