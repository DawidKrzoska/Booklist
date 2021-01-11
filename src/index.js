import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Booklist from "./Components/Booklist/Booklist";

ReactDOM.render(
  <React.StrictMode>
    <Booklist></Booklist>
  </React.StrictMode>,
  document.getElementById("root")
);
