import { actions, URL } from "../../reducer";
import { Store } from "../../context";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginPage.css";
// import axios from "axios";

export default function LoginPage() {
  const history = useHistory();
  const [, dispatch] = Store();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("none");
  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch(`${URL}/login`, {
      method: "post",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!Object.keys(data).includes("err")) {
          setAlert("none");
          let user = data;
          dispatch({
            type: actions.SET_USER,
            user: user,
          });
          if (data.username === username) {
            console.log("Login Is Secure");
            history.push("/");
          } else {
            console.log("Login Is Not Secure");
          }
        } else {
          setAlert("block");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-5 mb-2 d-flex align-items-center justify-content-center">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
              alt=""
              srcSet=""
              height="30px"
              width="90px"
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <div
          className="alert alert-danger col-9 mx-auto password__wrong__alert text-center"
          role="alert"
          style={{ display: alert }}
        >
          The Credentials You Entered Are Not Valid
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-2 col-1"></div>
        <div className="col-lg-6 col-md-8 col-10">
          <form
            id="login__form"
            className="container-fluid"
            onSubmit={(e) => handleLogin(e)}
          >
            <div className="row my-auto d-flex flex-column align-items-center justify-content-center">
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Username"
                className="col-md-6 col-10 my-3 mx-auto"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="col-md-6 col-10 my-3 mx-auto"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="col-6 my-3 mx-auto login__button ">
                Login
              </button>
            </div>
          </form>
          <div className="row mx-auto">
            <div className="col-4 mx-auto">
              <hr className="new__to__amazon__hr" />
            </div>
            <div className="col-lg-3 col-4 mx-auto text-center new__to__amazon ">
              New To Amazon ?
            </div>
            <div className="col-4 mx-auto">
              <hr className="new__to__amazon__hr" />
            </div>
          </div>
          <div className="row">
            <button
              onClick={(e) => {
                history.push("/register");
              }}
              className="col-6 my-3 mx-auto sign__up__button "
            >
              Create Your Amazon Account
            </button>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
