import React from "react";
import ReactDOM from "react-dom";
import Context from "./context/Context";
import App from "./App";

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.querySelector("#root")
);
