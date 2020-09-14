import { actions, URL } from "../../reducer";
import { Store } from "../../context";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../LoginPage/LoginPage.css";

export default function LoginPage() {
  const history = useHistory();
  const [, dispatch] = Store();
  const [username, setUsername] = useState("");
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    let body = { username: username, password: password, emailid: emailid };
    await fetch(`${URL}/register`, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
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
      })
      .catch((err) => console.log(err.message));
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
        <div className="col-lg-3 col-md-2 col-1"></div>
        <div className="col-lg-6 col-md-8 col-10">
          <form
            id="login__form"
            className="container-fluid"
            onSubmit={(e) => handleRegister(e)}
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
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="col-md-6 col-10 my-3 mx-auto"
                onChange={(e) => setEmail(e.target.value)}
                value={emailid}
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
                Register
              </button>
            </div>
          </form>
          <div className="row mx-auto">
            <div className="col-4 mx-auto">
              <hr className="new__to__amazon__hr" />
            </div>
            <div className="col-lg-3 col-4 mx-auto text-center new__to__amazon ">
              Have An Account?
            </div>
            <div className="col-4 mx-auto">
              <hr className="new__to__amazon__hr" />
            </div>
          </div>
          <div className="row">
            <button
              onClick={(e) => {
                history.push("/login");
              }}
              className="col-6 my-3 mx-auto sign__up__button "
            >
              Login
            </button>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
