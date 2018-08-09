import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initialize } from "./eth";

initialize()
  .then(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
  })
  .catch(error => {
    alert(error);
  });
