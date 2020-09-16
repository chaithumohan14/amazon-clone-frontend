import React from "react";
import { Store } from "../../context";
import { actions, URL } from "../../reducer";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

export default function CartComponent({ key, id, img, name, stock, price }) {
  const [store, dispatch] = Store();
  const removeFromOrders = async (e) => {
    e.preventDefault();
    await fetch(`${URL}/orders`, {
      method: "post",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        method: "REMOVE",
        itemId: id,
      }),
    })
      .then((res) => res.json())
      .then((userdata) => {
        if (userdata.id === store.user.id) {
          dispatch({
            type: actions.SET_USER,
            user: userdata,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return store.user.orders.includes(id) ? (
    <div key={key} className=" cart__component col-12 mx-auto my-5 py-3">
      <div className="row">
        <div className="col-4">
          <img src={img} height="100%" width="100%" alt="" srcSet="" />
        </div>
        <div className="col-8">
          <p className="search__component__title">{name}</p>
          <p className="search__component__price">${price}</p>
          <p className="search__component__stock">{stock}</p>
          <button
            onClick={(e) => removeFromOrders(e)}
            className="p-1 px-2 my-3 col-auto add__to__cart "
          >
            <RemoveShoppingCartIcon className="mx-1" /> Cancel Order
          </button>
        </div>
      </div>
    </div>
  ) : (
    <React.Fragment />
  );
}
