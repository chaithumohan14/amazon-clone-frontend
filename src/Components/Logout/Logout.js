import React from "react";
import { actions } from "../../reducer";
import { Store } from "../../context";
import { Redirect } from "react-router-dom";
// import axios from "axios";

export default function Logout() {
  const [, dispatch] = Store();
  const logout = async () => {
    await fetch("http://localhost:5000/logout", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      credentials: "include",
    });
  };
  logout();
  return (
    <div>
      {dispatch({
        type: actions.CLEAR_USER,
      })}
      <Redirect to="/" />
    </div>
  );
}
