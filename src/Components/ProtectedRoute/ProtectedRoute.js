import React from "react";
import { Redirect } from "react-router-dom";
import { Store } from "../../context";
export default function ProtectedRoute({ Component }) {
  const [store] = Store();
  return (
    <div>{store.user.username ? <Component /> : <Redirect to="/login" />}</div>
  );
}
