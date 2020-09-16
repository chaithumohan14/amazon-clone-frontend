import React from "react";
import { useHistory } from "react-router-dom";
import { URL, actions } from "../../reducer";
import { Store } from "../../context";
import "./SearchComponent.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
export default function SearchComponent({
  id,
  img,
  title,
  price,
  stock,
  cart = false,
}) {
  const history = useHistory();
  const [store, dispatch] = Store();
  const addToCart = async (e) => {
    e.preventDefault();
    if (!store.user.id) {
      history.push("/login");
    } else {
      await fetch(`${URL}/cart`, {
        method: "post",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          method: "ADD",
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
    }
  };
  const removeFromCart = async (e) => {
    e.preventDefault();
    await fetch(`${URL}/cart`, {
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
          {store.user.id ? (
            !store.user.cart.includes(id) ? (
              <button
                onClick={(e) => addToCart(e)}
                className="p-1 px-2 my-3 col-auto add__to__cart "
              >
                <FavoriteIcon className="mx-1" /> Add To Cart
              </button>
            ) : (
              <button
                onClick={(e) => removeFromCart(e)}
                className="p-1 px-2 my-3 col-auto add__to__cart "
              >
                <FavoriteIcon className="mx-1" /> Remove From Cart
              </button>
            )
          ) : (
            <button
              onClick={(e) => addToCart(e)}
              className="p-1 px-2 my-3 col-auto add__to__cart "
            >
              <FavoriteIcon className="mx-1" /> Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
