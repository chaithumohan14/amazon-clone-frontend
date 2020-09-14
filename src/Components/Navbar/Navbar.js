import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

import { actions } from "../../reducer";
import { Store } from "../../context";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Navbar.css";

export default function Navbar() {
  const [store, dispatch] = Store();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (store.searchTerm !== "") {
      history.push("/search");
    } else {
      history.push("/");
    }
  };
  return (
    <React.Fragment>
      <nav
        id="navbar"
        className="container-fluid d-flex flex-row  align-items-lg-center justify-content-between"
      >
        <Link to="/">
          <img
            onClick={(e) => history.push("/")}
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt=""
            className="logo"
            height="40px"
            width="200px"
          />
        </Link>
        <form
          autoComplete="off"
          action="/search"
          onSubmit={(e) => handleSubmit(e)}
          className="search__bar row d-none d-lg-flex   flex-row align-items-center justify-content-center"
        >
          <input
            className="col-11 "
            type="text"
            value={store.searchTerm}
            onChange={(e) => {
              dispatch({
                type: actions.SET_SEARCH,
                searchTerm: e.target.value,
              });
            }}
            name="search"
          />
          <button className="col-1">
            <SearchIcon />
          </button>
        </form>

        <div className="nav__items d-flex flex-row  align-items-center justify-content-center ">
          {store.user.username ? (
            <NavLink
              activeClassName="nav__item"
              to="/logout"
              className="nav__item text-left "
            >
              <p className="upper__nav__item">Hello ,{store.user.username}</p>
              <p className="lower__nav__item">Accounts and Lists</p>
            </NavLink>
          ) : (
            <NavLink
              activeClassName="nav__item"
              to="/login"
              className="nav__item text-left "
            >
              <p className="upper__nav__item">Hello , Sign in</p>
              <p className="lower__nav__item">Accounts and Lists</p>
            </NavLink>
          )}
          <NavLink
            activeClassName="nav__item"
            to="/"
            className="nav__item text-left d-lg-block d-none "
          >
            <p className="upper__nav__item">Returns</p>
            <p className="lower__nav__item">
              & Orders (
              {store.user && store.user.orders && store.user.username
                ? store.user.orders.length
                : 0}
              )
            </p>
          </NavLink>
          <NavLink
            activeClassName="nav__item"
            to="/"
            className="nav__item d-lg-block text-left d-none "
          >
            <p className="upper__nav__item">
              <ShoppingCartIcon />
            </p>
            <p className="lower__nav__item">
              Cart(
              {store.user && store.user.cart && store.user.username
                ? store.user.cart.length
                : 0}
              )
            </p>
          </NavLink>
        </div>
      </nav>
      <section className="sec__search">
        <form
          autoComplete="off"
          action="/search"
          onSubmit={(e) => handleSubmit(e)}
          className="search__bar mx-auto row d-lg-none d-flex   flex-row align-items-center justify-content-center"
        >
          <input
            className="col-11 "
            type="text"
            value={store.searchTerm}
            onChange={(e) => {
              dispatch({
                type: actions.SET_SEARCH,
                searchTerm: e.target.value,
              });
            }}
            name="search"
          />
          <button className="col-1 text-center">
            <SearchIcon />
          </button>
        </form>
      </section>
    </React.Fragment>
  );
}
//#131921
