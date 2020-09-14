import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import SearchPage from "./Components/Search_Page/SearchPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import Logout from "./Components/Logout/Logout";
import Footer from "./Components/Footer/Footer";
import { actions, URL } from "./reducer";
import { Store } from "./context";

import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const [, dispatch] = Store();
  useEffect(() => {
    const getSession = async () => {
      await fetch(`${URL}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": `${"http://localhost:5000"}`,
          Origin: `${"http://localhost:5000"}`,
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
        })
        .catch((err) => console.log(err.message));
    };
    getSession();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Navbar />
          <HomePage />
          <Footer />
        </Route>
        <Route exact path="/search">
          <Navbar />
          <SearchPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
