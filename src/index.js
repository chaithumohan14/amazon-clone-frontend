import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initialState, reducer } from "./reducer";
import { StoreProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={reducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//   const parseQuery = () => {
//     const params = document.location.search.replace("?", "");
//     const rawParams = params.split("&");
//     for (let i = 0; i < rawParams.length; i++) {
//       let tmp = rawParams[i].split("=");
//       query[tmp[0]] = tmp[1] || "";
//     }
//   };

//   if (query.name === "" || query.name === null) {
//     history.push("/");
//   }
//   console.log(query);
//   parseQuery();
